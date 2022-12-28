import { ChangeEvent, useState } from "react";

import { addNewFlashcard } from "libbs/src/handles/flashcards";

export const AddFlashcardForm = () => {
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("frontend");
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (answer && category && question) {
      addNewFlashcard({ answer, category, question });
      setQuestion("");
      setAnswer("");
    }
  };

  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAnswer(e.target.value);

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value);

  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuestion(e.target.value);

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
