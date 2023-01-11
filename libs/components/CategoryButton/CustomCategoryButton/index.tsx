import { FC, useContext, useEffect, useMemo } from "react";

import { CategoryButton } from "@shared/components/CategoryButton";
import { ICategoryButton } from "@shared/components/types";
import { FlashcardsContext } from "@shared/contexts/flashcardsContext";

const WithCustomFuctionality = (Component: FC<ICategoryButton>) => {
  const {
    category,
    allFlashcards,
    customFlashcards,
    setCategory,
    setCustomFlashcards,
  } = useContext(FlashcardsContext);

  useEffect(() => {
    const customFlashcardsFromStorage =
      localStorage.getItem("customFlashcards");

    const cFs = customFlashcardsFromStorage
      ? [...JSON.parse(customFlashcardsFromStorage)]
      : [];

    const hasLengthChanged = cFs.length !== customFlashcards?.length;

    if (hasLengthChanged) {
      setCustomFlashcards(cFs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFlashcards.length, customFlashcards?.length]);

  const customCategoryButton = useMemo(() => {
    const areAnyCustom = customFlashcards.length > 0;

    if (areAnyCustom) {
      return (
        <Component
          category={category}
          categoryName="custom"
          flashcardsByCategory={customFlashcards}
          numberOfFlashcards={customFlashcards.length}
          setCategory={setCategory}
        />
      );
    } else {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customFlashcards?.length]);

  return customCategoryButton;
};

export const CustomCategoryButton = () => {
  return WithCustomFuctionality(CategoryButton);
};
