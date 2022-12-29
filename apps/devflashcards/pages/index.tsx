import { useEffect, useState } from "react";

import { config } from "@app/config";

import { Categories } from "@shared/components/Categories";
import { FilterByKeyword } from "@shared/components/FilterByKeyword";
import { Flashcard } from "@shared/components/Flashcard";
import { IFlashcardItem } from "@shared/components/types";
import { FlashcardsContext } from "@shared/contexts/flashcardsContext";
import { Loader } from "@shared/components/Loader";
import { fetchNewFlashcards } from "@shared/src/handles/flashcards";
import { CategoryName } from "@shared/components/types";

import styles from "@app/styles/Home.module.scss";

export default function Home() {
  const { appName } = config;
  const [allFlashcards, setAllFlashcards] = useState<IFlashcardItem[]>([]);
  const [category, setCategory] = useState<CategoryName>("all");
  const [filteredFlashcards, setFilteredFlashcards] = useState<
    IFlashcardItem[]
  >([]);
  const [isLoading, setLoading] = useState(true);
  const [starredFlashcardsIDs, setStarredFlashcardsIDs] = useState<
    string[] | null
  >(null);

  useEffect(() => {
    let subscribe = true;
    if (filteredFlashcards.length < 1) {
      fetchNewFlashcards()
        .then((data) => {
          if (subscribe) {
            setLoading(false);
            setAllFlashcards(data as IFlashcardItem[]);
            setFilteredFlashcards(data as IFlashcardItem[]);
            sessionStorage.setItem(
              "numberOfAllFlashcards",
              String(data.length)
            );
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

  return isLoading ? (
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
  );
}
