import { useEffect } from "react";

import { Flashcards, SetFilteredFlashcards } from "@shared/components/types";
import { setLocalStorage } from "@shared/helpers/user";
import { fetchNewFlashcards } from "@shared/src/handles/flashcards";

export interface IUseFetchFlashcardsOnPageLoad {
  filteredFlashcards: Flashcards;
  setLoading: (state: boolean) => void;
  setAllFlashcards: (data: Flashcards) => void;
  setFilteredFlashcards: SetFilteredFlashcards;
}

export const useFetchFlashcardsOnPageLoad = ({
  filteredFlashcards,
  setLoading,
  setAllFlashcards,
  setFilteredFlashcards,
}: any) => {
  useEffect(() => {
    let subscribe = true;

    if (filteredFlashcards.length < 1) {
      //will be moved to React Query soon
      fetchNewFlashcards()
        .then((data) => {
          if (subscribe) {
            setLoading(false);
            setAllFlashcards(data as Flashcards);
            setFilteredFlashcards(data as Flashcards);
            setLocalStorage("numberOfAllFlashcards", data.length);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
    return () => {
      subscribe = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
