import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export type CategoryName = "all" | "deleted" | "frontend" | "other" | "starred";
export type Error = { message: string };
export type FlashcardID = string;
export type HandleSubmitHookForm = UseFormHandleSubmit<FieldValues>;
export interface ICategoryButton {
  category: CategoryName;
  categoryName: CategoryName;
  flashcardsByCategory: IFlashcardItem[];
  numberOfFlashcards?: number;
  setCategory: (category: CategoryName) => void;
}

export interface IFlashcardItem {
  answer: string;
  category: CategoryName;
  question: string;
  id: FlashcardID;
  visible?: boolean;
}
