import React, { ChangeEvent, useContext, useState } from "react";

import styles from "@app/styles/FilterByKeyword.module.scss";

import { FlashcardsContext } from "@shared/contexts/flashcardsContext";
import { useFilterFlashcards } from "@shared/hooks/useFilterFlashcards";

export const FilterByKeyword = () => {
  const { allFlashcards, setCategory, setFilteredFlashcards } =
    useContext(FlashcardsContext);
  const [keyword, setKeyword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toLowerCase());
  };

  useFilterFlashcards({
    allFlashcards,
    keyword,
    setCategory,
    setFilteredFlashcards,
  });

  return (
    <div className={styles.filter}>
      <input
        onChange={handleChange}
        placeholder="🔍 Type a keyword to filter flashcards..."
        type="search"
      />
    </div>
  );
};
