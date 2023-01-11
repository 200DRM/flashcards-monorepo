import { createContext } from "react";

import {
  CategoryName,
  FlashcardID,
  IFlashcardItem,
  IUser,
} from "@shared/components/types";

interface IProps {
  allFlashcards: IFlashcardItem[];
  category: CategoryName;
  customFlashcards: IFlashcardItem[];
  filteredFlashcards: IFlashcardItem[];
  starredFlashcardsIDs: FlashcardID[] | null;
  setCategory: (category: CategoryName) => void;
  setCustomFlashcards: (customFlashcards: IFlashcardItem[]) => void;
  setFilteredFlashcards: (flashcards: IFlashcardItem[]) => void;
  setStarredFlashcardsIDs: (ids: FlashcardID[]) => void;
  setUser: (user: IUser | null) => void;
  user: IUser | null;
}

export const FlashcardsContext = createContext({} as IProps);
