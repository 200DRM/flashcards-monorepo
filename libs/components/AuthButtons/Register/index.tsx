import classNames from "classnames";
import React from "react";
import { useContext } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FieldValues } from "react-hook-form";

import { HandleSubmitHookForm } from "@shared/components/types";
import { ErrorContext } from "@shared/contexts/errorContext";
import { auth } from "@shared/src/firebase_setup/firebase";
import { setCustomFlashcards } from "@shared/src/handles/user";

interface IProps {
  handleSubmit: HandleSubmitHookForm;
}

export const Register = ({ handleSubmit }: IProps) => {
  const { setError } = useContext(ErrorContext);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    setError(error);
  }

  const handleRegister = (data: FieldValues) => {
    const { email, password } = data;

    if (!loading) {
      createUserWithEmailAndPassword(email, password);
    }
  };

  if (user) {
    const userID = user?.user?.uid;
    userID && setCustomFlashcards(userID);

    return (
      <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    );
  }

  return (
    <button
      className={classNames("login", { disabled: loading })}
      onClick={handleSubmit(handleRegister)}
      type="submit"
    >
      REGISTER
    </button>
  );
};
