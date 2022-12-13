import Head from "next/head";

import Flashcard from "../components/Flashcard";

import styles from "../styles/Home.module.css";

export default function Home() {
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
          <button>front-end</button>
          <button>back-end</button>
          <button>ui / ux</button>
        </div>

        <Flashcard />
      </main>
    </div>
  );
}
