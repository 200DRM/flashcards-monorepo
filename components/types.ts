export type CategoryName = "frontend" | "backend" | "ux_ui";
export interface IFlashcardItem {
  answer: string;
  category: CategoryName;
  question: string;
  id: number;
}
