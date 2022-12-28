import { FC, useContext, useEffect, useMemo } from "react";

import { ICategoryButton } from "libbs/components/types";
import { CategoryButton } from "libbs/components/CategoryButton";
import { FlashcardsContext } from "libbs/contexts/flashcardsContext";

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

  useEffect(() => {
    const starredFlashcardsIDFromStorage =
      localStorage.getItem("starredFlashcards");

    const ids = starredFlashcardsIDFromStorage
      ? [...JSON.parse(starredFlashcardsIDFromStorage)]
      : [];

    const hasLengthChanged = ids.length !== starredFlashcardsIDs?.length;

    if (hasLengthChanged) {
      setStarredFlashcardsIDs(ids);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFlashcards.length, starredFlashcardsIDs?.length]);

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
