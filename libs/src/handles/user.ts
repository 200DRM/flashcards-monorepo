import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "@firebase/firestore";

import { IUserData } from "@shared/helpers/user";
import mockedFlashcards from "@shared/mockups/mockedFlashcards";
import { firebaseApiKey } from "@shared/src/firebase_setup/firebase";
import { firestore } from "@shared/src/firebase_setup/firebase";

export const getUserData = async (userID: string): Promise<IUserData> => {
  if (firebaseApiKey) {
    let userData: unknown;
    const q = query(
      collection(firestore, "users"),
      where("userID", "==", userID)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      userData = doc.data() as IUserData;
    });
    return userData as IUserData;
  } else {
    return { userID: "1", customFlashcards: mockedFlashcards };
  }
};

export const setCustomFlashcards = (userID: string) => {
  const colRef = collection(firestore, "users/");
  const docRef = doc(colRef, userID);
  setDoc(docRef, {
    userID,
    customFlashcards: [{ id: 2, question: "test1Q", answer: "test1A" }],
  });
};
