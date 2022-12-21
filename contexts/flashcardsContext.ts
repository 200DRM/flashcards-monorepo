import { createContext } from "react";
import { IFlashcardItem } from "../components/types";

interface IProps {
  allFlashcards: IFlashcardItem[];
  filterdFlashcards: IFlashcardItem[];
  setFilteredFlashcards: (flashcards: IFlashcardItem[]) => void;
}

export const FlashcardsContext = createContext({} as IProps);
