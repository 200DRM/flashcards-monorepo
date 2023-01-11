import { useEffect } from "react";

import { SetCustomFlashcards, SetUser } from "@shared/components/types";
import { getLocalStorage } from "@shared/helpers/user";

interface IProps {
  setCustomFlashcards: SetCustomFlashcards;
  setUser: SetUser;
}

export const useSetUserDataOnLoadInStore = ({
  setCustomFlashcards,
  setUser,
}: IProps) => {
  useEffect(() => {
    const customFlashcardsFromLocalStorage =
      getLocalStorage("customFlashcards");
    const userFromLocalStorage = getLocalStorage("user");

    if (userFromLocalStorage) {
      setUser(userFromLocalStorage);

      if (customFlashcardsFromLocalStorage) {
        setCustomFlashcards(customFlashcardsFromLocalStorage);
      }
    }
  }, []);
};
