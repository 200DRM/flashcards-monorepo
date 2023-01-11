import Link from "next/link";
import { useEffect, useState } from "react";

import { config } from "@app/config";
import styles from "@app/styles/Home.module.scss";

import { AddFlashcardForm } from "@shared/components/AddFlashcardForm";
import { AuthButtons } from "@shared/components/AuthButtons";
import { Categories } from "@shared/components/Categories";
import { ErrorModal } from "@shared/components/ErrorModal";
import { FilterByKeyword } from "@shared/components/FilterByKeyword";
import { Flashcard } from "@shared/components/Flashcard";
import { Loader } from "@shared/components/Loader";
import { IFlashcardItem, IUser } from "@shared/components/types";
import { CategoryName } from "@shared/components/types";
import { Error } from "@shared/components/types";
import { ErrorContext } from "@shared/contexts/errorContext";
import { FlashcardsContext } from "@shared/contexts/flashcardsContext";
import { setLocalStorage } from "@shared/helpers/user";
import { fetchCustomFlashcards, getLocalStorage } from "@shared/helpers/user";
import { fetchNewFlashcards } from "@shared/src/handles/flashcards";

export const Template1 = () => {
  const {
    appName,
    features: { auth },
  } = config;

  const [allFlashcards, setAllFlashcards] = useState<IFlashcardItem[]>([]);
  const [category, setCategory] = useState<CategoryName>("all");
  const [customFlashcards, setCustomFlashcards] = useState(() =>
    getLocalStorage("customFlashcards")
  );
  const [error, setError] = useState<Error | null>(null);
  const [filteredFlashcards, setFilteredFlashcards] = useState<
    IFlashcardItem[]
  >([]);
  const [isLoading, setLoading] = useState(true);
  const [starredFlashcardsIDs, setStarredFlashcardsIDs] = useState<
    string[] | null
  >(null);
  const [user, setUser] = useState<IUser | null>(() => getLocalStorage("user"));

  useEffect(() => {
    let subscribe = true;

    if (filteredFlashcards.length < 1) {
      fetchNewFlashcards()
        .then((data) => {
          if (subscribe) {
            setLoading(false);
            setAllFlashcards(data as IFlashcardItem[]);
            setFilteredFlashcards(data as IFlashcardItem[]);
            setLocalStorage("numberOfAllFlashcards", data.length);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
    return () => {
      subscribe = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const uid = user?.uid;

    if (uid) {
      setLocalStorage("user", user);

      if (customFlashcards) {
        setLocalStorage("customFlashcards", customFlashcards);
      }
    }
  }, [user?.uid]);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <FlashcardsContext.Provider
            value={{
              allFlashcards,
              category,
              customFlashcards,
              filteredFlashcards,
              setCategory,
              setCustomFlashcards,
              setFilteredFlashcards,
              setStarredFlashcardsIDs,
              setUser,
              starredFlashcardsIDs,
              user,
            }}
          >
            <div className={styles.header}>
              <h1 className={styles.title}>{appName}</h1>
              {user?.email && <h1 className={styles.title}>{user.email}</h1>}
              {auth ? <AuthButtons /> : null}
            </div>
            <main className={styles.main}>
              <div className={styles.filters}>
                <FilterByKeyword />
                <Categories />
                <Link href="/add-flashcard">
                  <button>ADD NEW</button>
                </Link>
              </div>
              <Flashcard />
            </main>
          </FlashcardsContext.Provider>
        </div>
      )}
      {error ? <ErrorModal error={error} /> : null}
    </ErrorContext.Provider>
  );
};
