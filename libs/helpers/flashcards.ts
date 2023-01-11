import { Flashcards, IFlashcardItem } from "@shared/components/types";
import {
  IChangeFlashcard,
  IGetRandomFlashcard,
  IHandleStarClick,
  ISetStarredFlashcardOnLoad,
} from "@shared/helpers/types";

export const getRandomFlashcard = ({
  flashcards,
  prevItem,
}: IGetRandomFlashcard) => {
  const arrayWithoutPrevItem = flashcards.filter((item) => item !== prevItem);
  const arrayLength = arrayWithoutPrevItem.length;

  return arrayWithoutPrevItem[Math.floor(Math.random() * arrayLength)];
};

export const onStarClick = ({
  flashcardID,
  setStarredFlashcardsIDs,
}: IHandleStarClick) => {
  const starredFlashcardsIDFromStorage =
    localStorage.getItem("starredFlashcards");

  const flashcardIsAlreadyStarred =
    starredFlashcardsIDFromStorage &&
    JSON.parse(starredFlashcardsIDFromStorage || "").includes(flashcardID);

  let updatedFlashcards;

  if (starredFlashcardsIDFromStorage && flashcardIsAlreadyStarred) {
    const starredFlashcardWithoutCurrent = JSON.parse(
      starredFlashcardsIDFromStorage
    ).filter((item: string) => item !== flashcardID);

    updatedFlashcards = starredFlashcardWithoutCurrent;
  } else if (starredFlashcardsIDFromStorage) {
    updatedFlashcards = [
      ...JSON.parse(starredFlashcardsIDFromStorage),
      flashcardID,
    ];
  } else {
    updatedFlashcards = [flashcardID];
  }

  setStarredFlashcardsIDs(updatedFlashcards);
  localStorage.setItem("starredFlashcards", JSON.stringify(updatedFlashcards));
};

export const setStarredFlashcardOnLoad = ({
  contextLength = 0,
  setStarredFlashcardsIDs,
}: ISetStarredFlashcardOnLoad) => {
  const starredFlashcardsIDFromStorage =
    localStorage.getItem("starredFlashcards");
  const allStarredFlashcardsIDs = starredFlashcardsIDFromStorage
    ? [...JSON.parse(starredFlashcardsIDFromStorage)]
    : null;

  const hasLengthChanged =
    allStarredFlashcardsIDs && allStarredFlashcardsIDs.length !== contextLength;

  if (hasLengthChanged) {
    setStarredFlashcardsIDs(allStarredFlashcardsIDs);
  }
};

export const handlePreviousFlashcard = ({
  flashcard,
  filteredFlashcards,
  setFlashcard,
}: IChangeFlashcard) => {
  if (flashcard) {
    const indexOfCurrentFlashcard = filteredFlashcards.indexOf(flashcard);

    if (indexOfCurrentFlashcard === 0) {
      setFlashcard(filteredFlashcards[filteredFlashcards.length - 1]);
    } else {
      setFlashcard(filteredFlashcards[indexOfCurrentFlashcard - 1]);
    }
  }
};

export const handleNextFlashcard = ({
  flashcard,
  filteredFlashcards,
  setFlashcard,
}: IChangeFlashcard) => {
  if (flashcard) {
    const indexOfCurrentFlashcard = filteredFlashcards.indexOf(flashcard);

    if (indexOfCurrentFlashcard === filteredFlashcards.length - 1) {
      setFlashcard(filteredFlashcards[0]);
    } else {
      setFlashcard(filteredFlashcards[indexOfCurrentFlashcard + 1]);
    }
  }
};

interface IUpdateAvailableFlashcards {
  filteredFlashcards: Flashcards;
  setFlashcard: (item: IFlashcardItem) => void;
}

export const updateAvailableFlashcards = ({
  filteredFlashcards,
  setFlashcard,
}: IUpdateAvailableFlashcards) => {
  if (filteredFlashcards) {
    const initialRandomFlashcard = getRandomFlashcard({
      flashcards: filteredFlashcards,
    });
    setFlashcard(initialRandomFlashcard);
  }
};
