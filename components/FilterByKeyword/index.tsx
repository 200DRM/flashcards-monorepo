import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { FlashcardsContext } from "../../contexts/flashcardsContext";

import styles from "../../styles/FilterByKeyword.module.scss";

export const FilterByKeyword = () => {
  const { allFlashcards, setCategory, setFilteredFlashcards } =
    useContext(FlashcardsContext);
  const [keyword, setKeyword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (allFlashcards.length > 0) {
      const debounce = setTimeout(() => {
        const filteredFlashcards = allFlashcards.filter((item) =>
          item.question.includes(keyword)
        );
        setFilteredFlashcards(filteredFlashcards);
        setCategory(null);
      }, 400);
      return () => clearTimeout(debounce);
    }
  }, [keyword]);

  return (
    <div className={styles.filter}>
      <input onChange={handleChange} type="search" />
      <button>🔍</button>
    </div>
  );
};
