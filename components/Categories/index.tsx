import React, { useState } from "react";

import CategoryButton from "../../components/CategoryButton";

import styles from "../../styles/Categories.module.scss";
import { CategoryName } from "../types";

export const Categories = () => {
  const [category, setCategory] = useState<CategoryName | null>(null);

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
