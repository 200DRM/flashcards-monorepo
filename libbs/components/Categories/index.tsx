import React, { useContext, useMemo } from "react";

import { StarredCategoryButton } from "libbs/components/CategoryButton/StarredCategoryButton";
import { FlashcardsContext } from "libbs/contexts/flashcardsContext";
import styles from "@app/styles/Categories.module.scss";
import { DatabaseCategoryButton } from "libbs/components/CategoryButton/DatabaseCategoryButton";

export const Categories = () => {
  const { allFlashcards, starredFlashcardsIDs } = useContext(FlashcardsContext);

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
      {starred}
    </div>
  );
};
