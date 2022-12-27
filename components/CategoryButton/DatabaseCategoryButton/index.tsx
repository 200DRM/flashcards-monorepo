import { FC, useContext } from "react";

import { CategoryName, ICategoryButton } from "@app/components/types";
import { CategoryButton } from "@app/components/CategoryButton";
import { FlashcardsContext } from "@app/contexts/flashcardsContext";

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
