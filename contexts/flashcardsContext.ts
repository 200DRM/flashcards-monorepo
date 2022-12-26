import { createContext } from "react";
import { CategoryName, IFlashcardItem } from "../components/types";

interface IProps {
  allFlashcards: IFlashcardItem[];
  category: CategoryName | null;
  filteredFlashcards: IFlashcardItem[];
  setCategory: (category: CategoryName | null) => void;
  setFilteredFlashcards: (flashcards: IFlashcardItem[]) => void;
}

export const FlashcardsContext = createContext({} as IProps);
