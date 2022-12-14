import { FC } from "react";

import { CategoryName, IFlashcardItem } from "../../components/types";

import { allFlashcards } from "../../pages/mockups/allFlashcards";

interface ICategoryButton {
  category: CategoryName | null;
  categoryName: CategoryName;
  setCategory: (category: CategoryName | null) => void;
  setFlashcards: (flashcards: IFlashcardItem[]) => void;
}

const CategoryButton: FC<ICategoryButton> = ({
  category,
  categoryName,
  setCategory,
  setFlashcards,
}) => {
  const handleCategoryChange = (categoryName: CategoryName) => {
    const categoryNameAlreadyActive = category === categoryName;
    const newFlashcards = categoryNameAlreadyActive
      ? allFlashcards
      : allFlashcards.filter((item) => item.category === categoryName);

    setCategory(categoryNameAlreadyActive ? null : categoryName);
    setFlashcards(newFlashcards);
  };
  return (
    <button onClick={() => handleCategoryChange(categoryName)}>
      {categoryName}
    </button>
  );
};

export default CategoryButton;
