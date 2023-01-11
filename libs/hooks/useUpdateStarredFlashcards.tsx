import { useEffect } from "react";

import {
  Flashcards,
  SetStarredFlashcardsIDs,
  StarredFlashcardsIDs,
} from "@shared/components/types";

interface IProps {
  allFlashcards: Flashcards;
  setStarredFlashcardsIDs: SetStarredFlashcardsIDs;
  starredFlashcardsIDs: StarredFlashcardsIDs;
}

export const useUpdateStarredFlashcards = ({
  allFlashcards,
  setStarredFlashcardsIDs,
  starredFlashcardsIDs,
}: IProps) => {
  useEffect(() => {
    const starredFlashcardsIDFromStorage =
      localStorage.getItem("starredFlashcards");

    const ids = starredFlashcardsIDFromStorage
      ? [...JSON.parse(starredFlashcardsIDFromStorage)]
      : [];

    const hasLengthChanged = ids.length !== starredFlashcardsIDs?.length;

    if (hasLengthChanged) {
      setStarredFlashcardsIDs(ids);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFlashcards.length, starredFlashcardsIDs?.length]);
};
