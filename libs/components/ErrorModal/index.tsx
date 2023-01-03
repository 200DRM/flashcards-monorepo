import React, { useEffect, useState } from "react";

import styles from "@app/styles/ErrorModal.module.scss";

import { Error } from "@shared/components/types";

interface IProps {
  error: Error | null;
}

export const ErrorModal = ({ error }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [error]);

  return isVisible ? (
    <div className={styles.background}>
      <div className={styles.container}>
        <span className={styles.text}>{error?.message}</span>
      </div>
    </div>
  ) : null;
};
