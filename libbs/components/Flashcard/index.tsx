import classNames from "classnames";
import DOMPurify from "dompurify";
import { useContext, useEffect, useState } from "react";

import { IFlashcardItem } from "libbs/components/types";
import { FlashcardActions } from "libbs/components/Flashcard/FlashcardActions";
import { FlashcardsContext } from "libbs/contexts/flashcardsContext";
import {
  getRandomFlashcard,
  handleNextFlashcard,
  handlePreviousFlashcard,
  setStarredFlashcardOnLoad,
} from "libbs/helpers/flashcards";

import styles from "@app/styles/Flashcard.module.scss";

export const Flashcard = () => {
  const { filteredFlashcards, starredFlashcardsIDs, setStarredFlashcardsIDs } =
    useContext(FlashcardsContext);

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

  useEffect(() => {
    updateFlashcards(filteredFlashcards);
  }, [filteredFlashcards]);

  useEffect(() => {
    setStarredFlashcardOnLoad({
      contextLength: starredFlashcardsIDs?.length,
      setStarredFlashcardsIDs,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setStarredFlashcardsIDs]);

  return flashcard ? (
    <div className={styles.grid}>
      <div className={classNames(styles.card, styles.question)}>
        <div
          className={classNames(styles.cardContent)}
          dangerouslySetInnerHTML={{
            __html: sanitizer(flashcard.question),
          }}
          onClick={handleChangeAnswerVisibility}
        />
        <FlashcardActions flashcardID={flashcard.id} />
      </div>
      <div className={styles.navigation}>
        <button
          className={styles.arrow}
          onClick={() =>
            handlePreviousFlashcard({
              flashcard,
              filteredFlashcards,
              setFlashcard,
            })
          }
        >
          &larr;
        </button>
        <button
          className={styles.visibility}
          onClick={handleChangeAnswerVisibility}
        >
          {isAnswerVisible ? "HIDE" : "SHOW"} ANSWER
        </button>
        <button
          className={styles.arrow}
          onClick={() =>
            handleNextFlashcard({ flashcard, filteredFlashcards, setFlashcard })
          }
        >
          &rarr;
        </button>
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
