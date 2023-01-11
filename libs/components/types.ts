import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormReset,
} from "react-hook-form";

export type CategoryName =
  | "all"
  | "custom"
  | "deleted"
  | "frontend"
  | "other"
  | "starred";
export type Error = { message: string };
export type FlashcardID = string;
export type Flashcards = IFlashcardItem[];
export type HandleSubmitHookForm = UseFormHandleSubmit<FieldValues>;
export interface ICategoryButton {
  category: CategoryName;
  categoryName: CategoryName;
  flashcardsByCategory: Flashcards;
  numberOfFlashcards?: number;
  setCategory: SetCategory;
}
export interface IFlashcardItem {
  answer: string;
  category: CategoryName;
  question: string;
  id: FlashcardID;
  visible?: boolean;
}
export interface IUser {
  email: string;
  uid: string;
}
export type ResetHookForm = UseFormReset<FieldValues>;
export type SetCategory = (category: CategoryName) => void;
export type SetCustomFlashcards = (data: Flashcards) => void;
export type SetFilteredFlashcards = (data: Flashcards) => void;
export type SetStarredFlashcardsIDs = (ids: FlashcardID[]) => void;
export type SetUser = (user: IUser | null) => void;
export type StarredFlashcardsIDs = FlashcardID[] | null;
