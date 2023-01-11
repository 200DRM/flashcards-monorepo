import { addDoc, collection, getDocs } from "@firebase/firestore";

import { setLocalStorage } from "@shared/helpers/user";
import { getLocalStorage } from "@shared/helpers/user";
import mockedFlashcards from "@shared/mockups/mockedFlashcards";
import { firestore } from "@shared/src/firebase_setup/firebase";
import { firebaseApiKey } from "@shared/src/firebase_setup/firebase";

interface IAddNewFlashcard {
  answer: string;
  category: string;
  question: string;
}

// for admin only
export const addNewFlashcard = ({
  answer,
  category,
  question,
}: IAddNewFlashcard) => {
  const ref = collection(firestore, "flashcards");
  const id = Number(getLocalStorage("numberOfAllFlashcards")) + 1;

  let data = {
    id,
    answer,
    category,
    question,
  };
  try {
    addDoc(ref, data);
  } catch (err) {
    console.log(err);
  }
  setLocalStorage("numberOfAllFlashcards", id);
};

export const fetchNewFlashcards = async () => {
  if (firebaseApiKey) {
    const colRef = collection(firestore, "flashcards/");
    const snapshots = await getDocs(colRef);
    const flashcards = snapshots.docs.map((doc) => doc.data());

    return flashcards;
  } else {
    return mockedFlashcards;
  }
};
