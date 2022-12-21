import { useContext, useEffect, useState } from "react";

import { IFlashcardItem } from "../../components/types";
import { FlashcardsContext } from "../../contexts/flashcardsContext";
import { getRandomFlashcard } from "../../helpers/flashcards";

import styles from "../../styles/Flashcard.module.scss";

const Flashcard = () => {
  const { filterdFlashcards } = useContext(FlashcardsContext);

  const [flashcard, setFlashcard] = useState<IFlashcardItem | null>(null);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const updateFlashcards = (filterdFlashcards: IFlashcardItem[]) => {
    if (filterdFlashcards) {
      const initialRandomFlashcard = getRandomFlashcard({
        flashcards: filterdFlashcards,
      });
      setFlashcard(initialRandomFlashcard);
    }
  };

  const handleChangeAnswerVisibility = () =>
    setIsAnswerVisible(!isAnswerVisible);

  const handlePrevious = () => {
    if (flashcard) {
      const indexOfCurrentFlashcard = filterdFlashcards.indexOf(flashcard);

      if (indexOfCurrentFlashcard === 0) {
        setFlashcard(filterdFlashcards[filterdFlashcards.length - 1]);
      } else {
        setFlashcard(filterdFlashcards[indexOfCurrentFlashcard - 1]);
      }
    }
  };

  const handleNext = () => {
    if (flashcard) {
      const indexOfCurrentFlashcard = filterdFlashcards.indexOf(flashcard);

      if (indexOfCurrentFlashcard === filterdFlashcards.length - 1) {
        setFlashcard(filterdFlashcards[0]);
      } else {
        setFlashcard(filterdFlashcards[indexOfCurrentFlashcard + 1]);
      }
    }
  };

  useEffect(() => {
    updateFlashcards(filterdFlashcards);
  }, [filterdFlashcards]);

  return flashcard ? (
    <div className={styles.grid}>
      <div className={styles.navigation}>
        <button onClick={handlePrevious}>&larr;</button>
        <button onClick={handleChangeAnswerVisibility}>
          {isAnswerVisible ? "HIDE" : "SHOW"}
        </button>
        <button onClick={handleNext}>&rarr;</button>
      </div>
      <div className={styles.card} onClick={handleChangeAnswerVisibility}>
        <p>{flashcard.question}</p>
      </div>
      {isAnswerVisible ? (
        <div className={styles.card} onClick={handleChangeAnswerVisibility}>
          <p>{flashcard.answer}</p>
        </div>
      ) : null}
    </div>
  ) : null;
};

export default Flashcard;
