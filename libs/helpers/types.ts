import {
  FlashcardID,
  Flashcards,
  IFlashcardItem,
  SetStarredFlashcardsIDs,
} from "@shared/components/types";

export interface IChangeFlashcard {
  flashcard: IFlashcardItem;
  filteredFlashcards: Flashcards;
  setFlashcard: (item: IFlashcardItem) => void;
}

export interface IGetRandomFlashcard {
  flashcards: Flashcards;
  prevItem?: IFlashcardItem;
}

export interface IHandleStarClick {
  flashcardID: FlashcardID;
  setStarredFlashcardsIDs: SetStarredFlashcardsIDs;
}

export interface ISetStarredFlashcardOnLoad {
  contextLength?: number;
  setStarredFlashcardsIDs: SetStarredFlashcardsIDs;
}
