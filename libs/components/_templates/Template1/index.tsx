import { useEffect, useMemo, useState } from "react";

import { config } from "@app/config";
import styles from "@app/styles/Home.module.scss";

import { AuthButtons } from "@shared/components/AuthButtons";
import { Categories } from "@shared/components/Categories";
import { ErrorModal } from "@shared/components/ErrorModal";
import { FilterByKeyword } from "@shared/components/FilterByKeyword";
import { Flashcard } from "@shared/components/Flashcard";
import { Loader } from "@shared/components/Loader";
import { IFlashcardItem } from "@shared/components/types";
import { CategoryName } from "@shared/components/types";
import { Error } from "@shared/components/types";
import { ErrorContext } from "@shared/contexts/errorContext";
import { FlashcardsContext } from "@shared/contexts/flashcardsContext";
import { fetchNewFlashcards } from "@shared/src/handles/flashcards";

export const Template1 = () => {
  const {
    appName,
    features: { auth },
  } = config;

  const [allFlashcards, setAllFlashcards] = useState<IFlashcardItem[]>([]);
  const [category, setCategory] = useState<CategoryName>("all");
  const [error, setError] = useState<Error | null>(null);
  const [filteredFlashcards, setFilteredFlashcards] = useState<
    IFlashcardItem[]
  >([]);
  const [isLoading, setLoading] = useState(true);
  const [starredFlashcardsIDs, setStarredFlashcardsIDs] = useState<
    string[] | null
  >(null);

  useEffect(() => {
    // let subscribe = true;
    // if (filteredFlashcards.length < 1) {
    //   fetchNewFlashcards()
    //     .then((data) => {
    //       if (subscribe) {
    //         setLoading(false);
    //         setAllFlashcards(data as IFlashcardItem[]);
    //         setFilteredFlashcards(data as IFlashcardItem[]);
    //         sessionStorage.setItem(
    //           "numberOfAllFlashcards",
    //           String(data.length)
    //         );
    //       }
    //     })
    //     .catch((err) => {
    //       setLoading(false);
    //       console.log(err);
    //     });
    // }
    // return () => {
    //   subscribe = false;
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {!isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <FlashcardsContext.Provider
            value={{
              allFlashcards,
              category,
              filteredFlashcards,
              setCategory,
              setFilteredFlashcards,
              setStarredFlashcardsIDs,
              starredFlashcardsIDs,
            }}
          >
            <div className={styles.header}>
              <h1 className={styles.title}>{appName}</h1>
              {auth ? <AuthButtons /> : null}
            </div>
            <main className={styles.main}>
              <div className={styles.filters}>
                <FilterByKeyword />
                <Categories />
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
