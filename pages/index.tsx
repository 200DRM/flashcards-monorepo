import Head from "next/head";
import { useEffect, useState } from "react";

import { Categories } from "../components/Categories";
import { Flashcard } from "../components/Flashcard";
import { IFlashcardItem } from "../components/types";
import { FlashcardsContext } from "../contexts/flashcardsContext";
import { fetchNewFlashcards } from "../src/handles/flashcards";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [allFlashcards, setAllFlashcards] = useState<IFlashcardItem[]>([]);
  const [filterdFlashcards, setFilteredFlashcards] = useState<IFlashcardItem[]>(
    []
  );

  useEffect(() => {
    let subscribe = true;
    if (filterdFlashcards.length < 1) {
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
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          FroDevApp - flashcards to learn front-end development and other
          IT-related theory
        </title>
        <meta
          name="description"
          content="FroDevApp - flashcards to learn front-end development theory and more"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlashcardsContext.Provider
        value={{ allFlashcards, filterdFlashcards, setFilteredFlashcards }}
      >
        <div className={styles.header}>
          <h1 className={styles.title}>FroDevApp</h1>
        </div>
        <main className={styles.main}>
          <Categories />
          <Flashcard />
        </main>
      </FlashcardsContext.Provider>
    </div>
  );
}
