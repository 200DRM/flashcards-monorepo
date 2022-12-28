import React, { ChangeEvent, useContext, useEffect, useState } from 'react';

import { FlashcardsContext } from '@shared/contexts/flashcardsContext';

import styles from '@app/styles/FilterByKeyword.module.scss';

export const FilterByKeyword = () => {
  const { allFlashcards, setCategory, setFilteredFlashcards } =
    useContext(FlashcardsContext);
  const [keyword, setKeyword] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (allFlashcards.length > 0) {
      const debounce = setTimeout(() => {
        const filteredFlashcards = allFlashcards.filter((item) =>
          item.question.toLowerCase().includes(keyword)
        );
        setFilteredFlashcards(filteredFlashcards);
        setCategory('all');
      }, 400);
      return () => clearTimeout(debounce);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, setCategory, setFilteredFlashcards]);

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
