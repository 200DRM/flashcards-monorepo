import { IFlashcardItem } from "@shared/components/types";
import { getUserData } from "@shared/src/handles/user";

export interface IUserData {
  customFlashcards: IFlashcardItem[];
  userID: string;
}

export const fetchUserFlashcards = (userID: string) => {
  getUserData(userID).then((data: IUserData) => data?.customFlashcards);
};
