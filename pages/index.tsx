import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

import { Categories } from "@app/components/Categories";
import { FilterByKeyword } from "@app/components/FilterByKeyword";
import { Flashcard } from "@app/components/Flashcard";
import { IFlashcardItem } from "@app/components/types";
import { FlashcardsContext } from "@app/contexts/flashcardsContext";
import { fetchNewFlashcards } from "@app/src/handles/flashcards";
import { CategoryName } from "@app/components/types";

import styles from "@app/styles/Home.module.scss";

export default function Home() {
  const [allFlashcards, setAllFlashcards] = useState<IFlashcardItem[]>([]);
  const [category, setCategory] = useState<CategoryName>("all");
  const [filteredFlashcards, setFilteredFlashcards] = useState<
    IFlashcardItem[]
  >([]);
  const [starredFlashcardsIDs, setStarredFlashcardsIDs] = useState<
    string[] | null
  >(null);

  useEffect(() => {
    let subscribe = true;
    if (filteredFlashcards.length < 1) {
      fetchNewFlashcards()
        .then((data) => {
          if (subscribe) {
            setAllFlashcards(data as IFlashcardItem[]);
            setFilteredFlashcards(data as IFlashcardItem[]);
            sessionStorage.setItem(
              "numberOfAllFlashcards",
              String(data.length)
            );
          }
        })
        .catch((err) => console.log(err));
    }
    return () => {
      subscribe = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Dev Learn App - flashcards to learn front-end development and other
          IT-related theory
        </title>
        <meta
          name="description"
          content="Dev Learn App - flashcards to learn front-end development theory and more"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <h1 className={styles.title}>Dev Learn App</h1>
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
