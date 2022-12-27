import { FlashcardID, IFlashcardItem } from "@app/components/types";

export interface IChangeFlashcard {
  flashcard: IFlashcardItem;
  filteredFlashcards: IFlashcardItem[];
  setFlashcard: (item: IFlashcardItem) => void;
}

export interface IGetRandomFlashcard {
  flashcards: IFlashcardItem[];
  prevItem?: IFlashcardItem;
}

export interface IHandleStarClick {
  flashcardID: FlashcardID;
  setStarredFlashcardsIDs: (ids: FlashcardID[]) => void;
}

export interface ISetStarredFlashcardOnLoad {
  contextLength?: number;
  setStarredFlashcardsIDs: (ids: FlashcardID[]) => void;
}
