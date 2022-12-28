import { FC, useContext } from "react";

import { CategoryName, ICategoryButton } from "libbs/components/types";
import { CategoryButton } from "libbs/components/CategoryButton";
import { FlashcardsContext } from "libbs/contexts/flashcardsContext";

const DatabaseCategory = (
  Component: FC<ICategoryButton>,
  categoryName: CategoryName
) => {
  const { category, setCategory, allFlashcards } =
    useContext(FlashcardsContext);

  const flashcardsByCategory =
    categoryName === "all"
      ? allFlashcards
      : allFlashcards.filter((item) => item.category === categoryName);

  return (
    <Component
      category={category}
      categoryName={categoryName}
      flashcardsByCategory={flashcardsByCategory}
      numberOfFlashcards={flashcardsByCategory.length}
      setCategory={setCategory}
    />
  );
};

interface DatabaseCategoryButton {
  categoryName: CategoryName;
}

export const DatabaseCategoryButton = ({
  categoryName,
}: DatabaseCategoryButton) => {
  return DatabaseCategory(CategoryButton, categoryName);
};
