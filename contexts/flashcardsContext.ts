import { createContext } from "react";
import {
  CategoryName,
  FlashcardID,
  IFlashcardItem,
} from "@app/components/types";

interface IProps {
  allFlashcards: IFlashcardItem[];
  category: CategoryName;
  filteredFlashcards: IFlashcardItem[];
  starredFlashcardsIDs: FlashcardID[] | null;
  setCategory: (category: CategoryName) => void;
  setFilteredFlashcards: (flashcards: IFlashcardItem[]) => void;
  setStarredFlashcardsIDs: (ids: FlashcardID[]) => void;
}

export const FlashcardsContext = createContext({} as IProps);
