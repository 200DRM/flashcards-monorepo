import { useState } from "react";
import styles from "../../styles/Home.module.css";

const Flashcard = () => {
  const [flashcard, setFlashcard] = useState({
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation.",
  });

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <p>{flashcard.question}</p>
      </div>

      <div>
        <button>&rarr;</button>
        <button>&rarr;</button>
        <button>&rarr;</button>
      </div>

      <div className={styles.card}>
        <p>{flashcard.answer}</p>
      </div>
    </div>
  );
};

export default Flashcard;
