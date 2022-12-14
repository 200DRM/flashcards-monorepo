import { IFlashcardItem } from "../components/types";

interface IGetRandomArrayItem {
  flashcards: IFlashcardItem[];
  prevItem?: IFlashcardItem;
}

export const getRandomArrayItem = ({
  flashcards,
  prevItem,
}: IGetRandomArrayItem) => {
  const arrayWithoutPrevItem = flashcards.filter((item) => item !== prevItem);
  const arrayLength = arrayWithoutPrevItem.length;

  return arrayWithoutPrevItem[Math.floor(Math.random() * arrayLength)];
};
