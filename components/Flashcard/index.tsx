import classNames from "classnames";
import DOMPurify from "dompurify";
import { useContext, useEffect, useState } from "react";

import { IFlashcardItem } from "../../components/types";
import { FlashcardsContext } from "../../contexts/flashcardsContext";
import { getRandomFlashcard } from "../../helpers/flashcards";

import styles from "../../styles/Flashcard.module.scss";

export const Flashcard = () => {
  const { filteredFlashcards } = useContext(FlashcardsContext);

  const [flashcard, setFlashcard] = useState<IFlashcardItem | null>(null);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const sanitizer = DOMPurify.sanitize;

  const updateFlashcards = (filteredFlashcards: IFlashcardItem[]) => {
    if (filteredFlashcards) {
      const initialRandomFlashcard = getRandomFlashcard({
        flashcards: filteredFlashcards,
      });
      setFlashcard(initialRandomFlashcard);
    }
  };

  const handleChangeAnswerVisibility = () =>
    setIsAnswerVisible(!isAnswerVisible);

  const handlePrevious = () => {
    if (flashcard) {
      const indexOfCurrentFlashcard = filteredFlashcards.indexOf(flashcard);

      if (indexOfCurrentFlashcard === 0) {
        setFlashcard(filteredFlashcards[filteredFlashcards.length - 1]);
      } else {
        setFlashcard(filteredFlashcards[indexOfCurrentFlashcard - 1]);
      }
    }
  };

  const handleNext = () => {
    if (flashcard) {
      const indexOfCurrentFlashcard = filteredFlashcards.indexOf(flashcard);

      if (indexOfCurrentFlashcard === filteredFlashcards.length - 1) {
        setFlashcard(filteredFlashcards[0]);
      } else {
        setFlashcard(filteredFlashcards[indexOfCurrentFlashcard + 1]);
      }
    }
  };

  useEffect(() => {
    updateFlashcards(filteredFlashcards);
  }, [filteredFlashcards]);

  return flashcard ? (
    <div className={styles.grid}>
      <div
        className={classNames(styles.card, styles.question)}
        dangerouslySetInnerHTML={{
          __html: sanitizer(flashcard.question),
        }}
        onClick={handleChangeAnswerVisibility}
      />
      <div className={styles.navigation}>
        <button onClick={handlePrevious}>&larr;</button>
        <button onClick={handleChangeAnswerVisibility}>
          {isAnswerVisible ? "HIDE" : "SHOW"} ANSWER
        </button>
        <button onClick={handleNext}>&rarr;</button>
      </div>
      {isAnswerVisible ? (
        <div
          className={classNames(styles.card, styles.answer)}
          dangerouslySetInnerHTML={{
            __html: sanitizer(flashcard.answer),
          }}
        />
      ) : null}
    </div>
  ) : null;
};
