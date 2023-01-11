import { ChangeEvent, useContext, useEffect, useId, useState } from "react";

import { CategoryName, IFlashcardItem, IUser } from "@shared/components/types";
import { getLocalStorage, setLocalStorage } from "@shared/helpers/user";
import { updateCustomFlashcardsInDB } from "@shared/src/handles/user";

export const AddFlashcardForm = () => {
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("frontend");
  const [customFlashcards, setCustomFlashcards] = useState<
    IFlashcardItem[] | []
  >([]);
  const [question, setQuestion] = useState("");
  const [user, setUser] = useState<IUser | null>(null);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userID = user?.uid;

    if (userID && answer && category && question) {
      const id = `cf${Math.floor(Math.random() * 10000000000000000)}${
        customFlashcards?.length
      }`;
      const newFlashcards = [
        ...customFlashcards,
        { id, answer, category: "other" as CategoryName, question },
      ];
      updateCustomFlashcardsInDB({
        userID,
        customFlashcards: newFlashcards,
      }).then(() => {
        setCustomFlashcards(newFlashcards);
        setLocalStorage("customFlashcards", newFlashcards);
        setQuestion("");
        setAnswer("");
      });
    }
  };

  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAnswer(e.target.value);

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value);

  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuestion(e.target.value);

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

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleQuestionChange}
        placeholder="Type question..."
        value={question}
      />
      <input
        onChange={handleAnswerChange}
        placeholder="Type answer..."
        value={answer}
      />
      <input
        onChange={handleCategoryChange}
        placeholder="Type category..."
        value={category}
      />
      <button type="submit">ADD</button>
    </form>
  );
};
