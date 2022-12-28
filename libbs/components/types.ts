export type CategoryName = "all" | "deleted" | "frontend" | "other" | "starred";
export type FlashcardID = string;
export interface IFlashcardItem {
  answer: string;
  category: CategoryName;
  question: string;
  id: FlashcardID;
  visible?: boolean;
}
export interface ICategoryButton {
  category: CategoryName;
  categoryName: CategoryName;
  flashcardsByCategory: IFlashcardItem[];
  numberOfFlashcards?: number;
  setCategory: (category: CategoryName) => void;
}
