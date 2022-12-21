import Head from "next/head";
import { useEffect, useState } from "react";

import CategoryButton from "../components/CategoryButton";
import Flashcard from "../components/Flashcard";
import { CategoryName, IFlashcardItem } from "../components/types";
import { FlashcardsContext } from "../contexts/flashcardsContext";
import { fetchNewFlashcards } from "../src/handles/flashcards";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [allFlashcards, setAllFlashcards] = useState<IFlashcardItem[]>([]);
  const [category, setCategory] = useState<CategoryName | null>(null);
  const [filterdFlashcards, setFilteredFlashcards] = useState<IFlashcardItem[]>(
    []
  );

  useEffect(() => {
    if (filterdFlashcards.length < 1) {
      fetchNewFlashcards()
        .then((data) => {
          setAllFlashcards(data as IFlashcardItem[]);
          setFilteredFlashcards(data as IFlashcardItem[]);
          sessionStorage.setItem("numberOfAllFlashcards", String(data.length));
        })
        .catch((err) => console.log(err));
    }
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
        <main className={styles.main}>
          <h1 className={styles.title}>FroDevApp</h1>
          <div className={styles.categoriesMenu}>
            <span>categories: </span>
            <CategoryButton
              category={category}
              categoryName="all"
              setCategory={setCategory}
            />
            <CategoryButton
              category={category}
              categoryName="frontend"
              setCategory={setCategory}
            />
            <CategoryButton
              category={category}
              categoryName="other"
              setCategory={setCategory}
            />
          </div>
          <Flashcard />
        </main>
      </FlashcardsContext.Provider>
    </div>
  );
}
