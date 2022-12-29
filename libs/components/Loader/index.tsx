import React from "react";

import styles from "@app/styles/Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} />
    </div>
  );
};
