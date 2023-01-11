import { Flashcards, IFlashcardItem } from "@shared/components/types";
import { getUserData } from "@shared/src/handles/user";

export interface IUserData {
  customFlashcards: Flashcards;
  userID: string;
}

export const fetchCustomFlashcards = async (uid: string) => {
  const customFlashcards = await getUserData(uid).then(
    (data: IUserData) => data?.customFlashcards
  );
  const array: Flashcards = [];

  if (customFlashcards) {
    customFlashcards.forEach((flashcard: IFlashcardItem) => {
      array.push(flashcard);
    });
    setLocalStorage("customFlashcards", customFlashcards);

    return array;
  } else {
    return null;
  }
};

export const getLocalStorage = (
  key: "customFlashcards" | "numberOfAllFlashcards" | "user"
) => {
  try {
    const value = window.localStorage.getItem(key);

    if (value) {
      JSON.parse(value);
    } else {
      return null;
    }
    return value ? JSON.parse(value) : null;
  } catch (e) {
    return null;
  }
};

export const setLocalStorage = (
  key: "customFlashcards" | "numberOfAllFlashcards" | "user",
  value: object | null | number | string
) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log("error", e);
  }
};
