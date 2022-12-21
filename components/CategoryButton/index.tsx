import { FC, useContext } from "react";

import { CategoryName } from "../../components/types";
import { FlashcardsContext } from "../../contexts/flashcardsContext";

interface ICategoryButton {
  category: CategoryName | null;
  categoryName: CategoryName;
  setCategory: (category: CategoryName | null) => void;
}

const CategoryButton: FC<ICategoryButton> = ({
  category,
  categoryName,
  setCategory,
}) => {
  const { allFlashcards, setFilteredFlashcards } =
    useContext(FlashcardsContext);

  const flashcardsFilteredByCategory = allFlashcards.filter(
    (item) => item.category === categoryName
  );
  const numberOfFlashcardsInCategory =
    categoryName === "all"
      ? allFlashcards.length
      : flashcardsFilteredByCategory.length;

  const handleCategoryChange = (categoryName: CategoryName) => {
    const shouldShowAll = category === categoryName || categoryName === "all";
    const newFlashcards = shouldShowAll
      ? allFlashcards
      : flashcardsFilteredByCategory;

    setCategory(shouldShowAll ? null : categoryName);
    setFilteredFlashcards(newFlashcards);
  };
  return (
    <button onClick={() => handleCategoryChange(categoryName)}>
      {categoryName} ({numberOfFlashcardsInCategory})
    </button>
  );
};

export default CategoryButton;
