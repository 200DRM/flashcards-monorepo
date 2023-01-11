import { useEffect } from "react";

import { Flashcards, IUser } from "@shared/components/types";
import { setLocalStorage } from "@shared/helpers/user";

interface IProps {
  customFlashcards: Flashcards;
  user: IUser | null;
}

export const useSetUserDataInLocalStorage = ({
  customFlashcards,
  user,
}: IProps) => {
  useEffect(() => {
    const uid = user?.uid;

    if (uid) {
      setLocalStorage("user", user);

      if (customFlashcards) {
        setLocalStorage("customFlashcards", customFlashcards);
      }
    }
  }, [user?.uid]);
};
