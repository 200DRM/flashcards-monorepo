import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "@firebase/firestore";

import { Flashcards } from "@shared/components/types";
import { IUserData } from "@shared/helpers/user";
import mockedFlashcards from "@shared/mockups/mockedFlashcards";
import { firebaseApiKey } from "@shared/src/firebase_setup/firebase";
import { firestore } from "@shared/src/firebase_setup/firebase";

interface IUpdateCustomFlashcards {
  customFlashcards: Flashcards;
  userID: string;
}

export const getUserData = async (uid: string): Promise<IUserData> => {
  if (firebaseApiKey) {
    let userData: unknown;
    const q = query(collection(firestore, "users"), where("userID", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      userData = doc.data() as IUserData;
    });
    return userData as IUserData;
  } else {
    return { userID: "1", customFlashcards: mockedFlashcards };
  }
};

export const updateCustomFlashcardsInDB = async ({
  customFlashcards,
  userID,
}: IUpdateCustomFlashcards) => {
  const colRef = collection(firestore, "users/");
  const docRef = doc(colRef, userID);

  setDoc(docRef, {
    userID,
    customFlashcards,
  });
};
