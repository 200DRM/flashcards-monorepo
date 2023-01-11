import { FC, useContext, useMemo } from "react";

import { CategoryButton } from "@shared/components/CategoryButton";
import { ICategoryButton } from "@shared/components/types";
import { FlashcardsContext } from "@shared/contexts/flashcardsContext";
import { useUpdateStarredFlashcards } from "@shared/hooks/useUpdateStarredFlashcards";

const WithStarringFuctionality = (Component: FC<ICategoryButton>) => {
  const {
    category,
    setCategory,
    allFlashcards,
    setStarredFlashcardsIDs,
    starredFlashcardsIDs,
  } = useContext(FlashcardsContext);

  const flashcardsByCategory = allFlashcards.filter((item) =>
    starredFlashcardsIDs?.includes(item.id)
  );

  useUpdateStarredFlashcards({
    allFlashcards,
    setStarredFlashcardsIDs,
    starredFlashcardsIDs,
  });

  const starredCategoryButton = useMemo(() => {
    const areAnyStarred = allFlashcards.length > 0;

    if (areAnyStarred) {
      return (
        <Component
          category={category}
          categoryName="starred"
          flashcardsByCategory={flashcardsByCategory}
          numberOfFlashcards={flashcardsByCategory.length}
          setCategory={setCategory}
        />
      );
    } else {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flashcardsByCategory?.length, starredFlashcardsIDs?.length]);

  return starredCategoryButton;
};

export const StarredCategoryButton = () => {
  return WithStarringFuctionality(CategoryButton);
};
