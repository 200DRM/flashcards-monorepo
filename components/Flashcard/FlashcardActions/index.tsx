import classNames from "classnames";
import React, { useContext } from "react";

import { FlashcardsContext } from "@app/contexts/flashcardsContext";
import { onStarClick } from "@app/helpers/flashcards";
import { FlashcardID } from "@app/components/types";

import styles from "@app/styles/Flashcard.module.scss";

interface IProps {
  flashcardID: FlashcardID;
}

export const FlashcardActions = ({ flashcardID }: IProps) => {
  const { setStarredFlashcardsIDs, starredFlashcardsIDs } =
    useContext(FlashcardsContext);

  const isStarred = starredFlashcardsIDs?.includes(flashcardID);
  const tooltipText = isStarred
    ? 'click to remove from "starred" section'
    : 'click to save in "starred" section';

  return (
    <div className={classNames(styles.cardActions)}>
      <span
        className={classNames(styles.starCard, {
          [styles.starCardActive]: starredFlashcardsIDs?.includes(flashcardID),
        })}
        onClick={() => onStarClick({ flashcardID, setStarredFlashcardsIDs })}
      >
        ⭐
        <span className={classNames(styles.starCardTooltip)}>
          {tooltipText}
        </span>
      </span>
    </div>
  );
};
