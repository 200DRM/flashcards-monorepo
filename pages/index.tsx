import Head from "next/head";
import { useState } from "react";

import CategoryButton from "../components/CategoryButton";
import Flashcard from "../components/Flashcard";

import { allFlashcards } from "./mockups/allFlashcards";
import { CategoryName, IFlashcardItem } from "../components/types";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [category, setCategory] = useState<CategoryName | null>(null);
  const [flashcards, setFlashcards] = useState<IFlashcardItem[]>(allFlashcards);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Dev Learn App - flashcards to learn front-end development, back-end
          development and UI / UX theory
        </title>
        <meta
          name="description"
          content="Dev Learn App - flashcards to learn front-end development, back-end development and UI / UX theory"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Dev Learn App</h1>
        <div className={styles.categoriesMenu}>
          <CategoryButton
            category={category}
            categoryName="frontend"
            setCategory={setCategory}
            setFlashcards={setFlashcards}
          />
          <CategoryButton
            category={category}
            categoryName="backend"
            setCategory={setCategory}
            setFlashcards={setFlashcards}
          />
          <CategoryButton
            category={category}
            categoryName="ux_ui"
            setCategory={setCategory}
            setFlashcards={setFlashcards}
          />
        </div>
        <Flashcard flashcards={flashcards} />
      </main>
    </div>
  );
}
