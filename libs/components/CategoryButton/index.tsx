import classNames from "classnames";
import { FC, useContext } from "react";

import { CategoryName, ICategoryButton } from "@shared/components/types";
import { FlashcardsContext } from "@shared/contexts/flashcardsContext";

export const CategoryButton: FC<ICategoryButton> = ({
  category,
  categoryName,
  flashcardsByCategory,
  numberOfFlashcards = 0,
  setCategory,
}) => {
  const { allFlashcards, setFilteredFlashcards } =
    useContext(FlashcardsContext);

  const handleCategoryChange = (categoryName: CategoryName) => {
    const shouldShowAll = category === categoryName || categoryName === "all";
    const newFlashcards = shouldShowAll ? allFlashcards : flashcardsByCategory;

    setCategory(shouldShowAll ? "all" : categoryName);
    setFilteredFlashcards(newFlashcards);
  };

  return (
    <button
      className={classNames({ active: categoryName === category })}
      onClick={() => handleCategoryChange(categoryName)}
    >
      {categoryName} ({numberOfFlashcards})
    </button>
  );
};
