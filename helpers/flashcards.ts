import { IFlashcardItem } from "../components/types";

interface IGetRandomFlashcard {
  flashcards: IFlashcardItem[];
  prevItem?: IFlashcardItem;
}

export const getRandomFlashcard = ({
  flashcards,
  prevItem,
}: IGetRandomFlashcard) => {
  const arrayWithoutPrevItem = flashcards.filter((item) => item !== prevItem);
  const arrayLength = arrayWithoutPrevItem.length;

  return arrayWithoutPrevItem[Math.floor(Math.random() * arrayLength)];
};
