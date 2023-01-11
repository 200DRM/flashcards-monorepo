import { createContext } from "react";

import {
  CategoryName,
  Flashcards,
  IUser,
  SetCategory,
  SetCustomFlashcards,
  SetFilteredFlashcards,
  SetStarredFlashcardsIDs,
  SetUser,
  StarredFlashcardsIDs,
} from "@shared/components/types";

interface IProps {
  allFlashcards: Flashcards;
  category: CategoryName;
  customFlashcards: Flashcards;
  filteredFlashcards: Flashcards;
  starredFlashcardsIDs: StarredFlashcardsIDs;
  setCategory: SetCategory;
  setCustomFlashcards: SetCustomFlashcards;
  setFilteredFlashcards: SetFilteredFlashcards;
  setStarredFlashcardsIDs: SetStarredFlashcardsIDs;
  setUser: SetUser;
  user: IUser | null;
}

export const FlashcardsContext = createContext({} as IProps);
