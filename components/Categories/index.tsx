import React, { useContext } from "react";

import CategoryButton from "../../components/CategoryButton";
import { FlashcardsContext } from "../../contexts/flashcardsContext";

import styles from "../../styles/Categories.module.scss";

export const Categories = () => {
  const { category, setCategory } = useContext(FlashcardsContext);

  return (
    <div className={styles.categoriesMenu}>
      <CategoryButton
        category={category}
        categoryName="all"
        setCategory={setCategory}
      />
      <CategoryButton
        category={category}
        categoryName="frontend"
        setCategory={setCategory}
      />
      <CategoryButton
        category={category}
        categoryName="other"
        setCategory={setCategory}
      />
    </div>
  );
};
