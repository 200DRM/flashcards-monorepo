import React, { useId } from "react";

import styles from "@app/styles/AddFlashcardPage.module.scss";

import { AddFlashcardForm } from "@shared/components/AddFlashcardForm";

export const Template1AddFlashcardPage = () => {
  return (
    <div className={styles.container}>
      <AddFlashcardForm />
    </div>
  );
};
