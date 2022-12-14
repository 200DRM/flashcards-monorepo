import { FC, useEffect, useState } from "react";

import { IFlashcardItem } from "../../components/types";
import { getRandomArrayItem } from "../../helpers/flashcards";

import styles from "../../styles/Home.module.css";

interface IFlashcard {
  flashcards: IFlashcardItem[];
}

const Flashcard: FC<IFlashcard> = ({ flashcards }) => {
  const [flashcard, setFlashcard] = useState<IFlashcardItem | null>(null);

  const updateFlashcards = (flashcards: IFlashcardItem[]) => {
    if (flashcards) {
      const initialRandomFlashcard = getRandomArrayItem({ flashcards });
      setFlashcard(initialRandomFlashcard);
    }
  };

  useEffect(() => {
    updateFlashcards(flashcards);
  }, [flashcards]);

  return flashcard ? (
    <div className={styles.grid}>
      <div className={styles.card}>
        <p>{flashcard.question}</p>
      </div>

      <div>
        <button>&rarr;</button>
        <button>&rarr;</button>
        <button>&rarr;</button>
      </div>

      <div className={styles.card}>
        <p>{flashcard.answer}</p>
      </div>
    </div>
  ) : null;
};

export default Flashcard;
