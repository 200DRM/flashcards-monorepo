export type CategoryName = "all" | "frontend" | "other";
export interface IFlashcardItem {
  answer: string;
  category: CategoryName;
  question: string;
  id: number;
}
