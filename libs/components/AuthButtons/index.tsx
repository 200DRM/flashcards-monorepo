import classNames from "classnames";
import React, { useContext, useMemo } from "react";
import { useForm } from "react-hook-form";

import styles from "@app/styles/AuthButtons.module.scss";

import { Login } from "@shared/components/AuthButtons/Login";
import { Register } from "@shared/components/AuthButtons/Register";
import { FlashcardsContext } from "@shared/contexts/flashcardsContext";
import { setLocalStorage } from "@shared/helpers/user";
import mockedFlashcards from "@shared/mockups/mockedFlashcards";
import { firebaseApiKey } from "@shared/src/firebase_setup/firebase";
import { updateCustomFlashcardsInDB } from "@shared/src/handles/user";

import { Logout } from "./Logout";

export const AuthButtons = () => {
  const { customFlashcards, setCustomFlashcards, user } =
    useContext(FlashcardsContext);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();
  const requiredFieldText = "This field is required";
  const isEmailEmpty = errors?.email?.type === "required";
  const isPasswordEmpty = errors?.password?.type === "required";

  const loginButton = useMemo(() => {
    return <Login handleSubmit={handleSubmit} reset={reset} />;
  }, [handleSubmit]);

  const registerButton = useMemo(() => {
    return <Register handleSubmit={handleSubmit} reset={reset} />;
  }, [handleSubmit]);

  return firebaseApiKey ? (
    <form className={styles.container}>
      {user?.uid ? (
        <Logout />
      ) : (
        <>
          <input
            className={classNames({ [styles.inputError]: isEmailEmpty })}
            placeholder="Your email..."
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          {isEmailEmpty ? (
            <span className={classNames(styles.error)}>
              {requiredFieldText}
            </span>
          ) : null}
          <input
            className={classNames({ [styles.inputError]: isPasswordEmpty })}
            placeholder="Your password..."
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          {isPasswordEmpty ? (
            <span className={classNames(styles.error)}>
              {requiredFieldText}
            </span>
          ) : null}
          <div className={styles.buttons}>
            {loginButton}
            {registerButton}
            {/* {user?.userID && (
          <button
            type="button"
            onClick={() => {
              updateCustomFlashcardsInDB({
                customFlashcards: [...customFlashcards, mockedFlashcards[0]],
                uid: user?.uid,
              });
              setLocalStorage("customFlashcards", [
                ...customFlashcards,
                mockedFlashcards[0],
              ]);
              setCustomFlashcards([...customFlashcards, mockedFlashcards[0]]);
            }}
          >
            add flashcard
          </button>
        )} */}
          </div>
        </>
      )}
    </form>
  ) : null;
};
