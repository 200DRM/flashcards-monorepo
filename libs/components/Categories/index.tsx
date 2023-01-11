import React, { useContext, useMemo } from "react";

import styles from "@app/styles/Categories.module.scss";

import { CustomCategoryButton } from "@shared/components/CategoryButton/CustomCategoryButton";
import { DatabaseCategoryButton } from "@shared/components/CategoryButton/DatabaseCategoryButton";
import { StarredCategoryButton } from "@shared/components/CategoryButton/StarredCategoryButton";
import { FlashcardsContext } from "@shared/contexts/flashcardsContext";

export const Categories = () => {
  const { allFlashcards, customFlashcards, starredFlashcardsIDs } =
    useContext(FlashcardsContext);

  const databaseCategories = useMemo(() => {
    if (allFlashcards.length > 0) {
      return (
        <>
          <DatabaseCategoryButton categoryName="all" />
          <DatabaseCategoryButton categoryName="frontend" />
          <DatabaseCategoryButton categoryName="other" />
        </>
      );
    } else {
      return null;
    }
  }, [allFlashcards.length]);

  const custom = useMemo(() => {
    if (customFlashcards?.length) {
      return <CustomCategoryButton />;
    } else {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customFlashcards?.length]);

  const starred = useMemo(() => {
    if (starredFlashcardsIDs && starredFlashcardsIDs.length > 0) {
      return <StarredCategoryButton />;
    } else {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [starredFlashcardsIDs?.length]);

  return (
    <div className={styles.categoriesMenu}>
      {databaseCategories}
      {custom}
      {starred}
    </div>
  );
};
