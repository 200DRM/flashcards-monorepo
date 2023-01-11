import { useEffect } from "react";

import {
  Flashcards,
  SetCategory,
  SetFilteredFlashcards,
} from "@shared/components/types";

interface IProps {
  allFlashcards: Flashcards;
  keyword: string;
  setCategory: SetCategory;
  setFilteredFlashcards: SetFilteredFlashcards;
}

export const useFilterFlashcards = ({
  allFlashcards,
  keyword,
  setCategory,
  setFilteredFlashcards,
}: IProps) => {
  useEffect(() => {
    if (allFlashcards.length > 0) {
      const debounce = setTimeout(() => {
        const filteredFlashcards = allFlashcards.filter((item) =>
          item.question.toLowerCase().includes(keyword)
        );
        setFilteredFlashcards(filteredFlashcards);
        setCategory("all");
      }, 400);
      return () => clearTimeout(debounce);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, setCategory, setFilteredFlashcards]);
};
