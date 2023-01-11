import classNames from "classnames";
import React from "react";
import { useCallback, useContext } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FieldValues } from "react-hook-form";

import { HandleSubmitHookForm, ResetHookForm } from "@shared/components/types";
import { ErrorContext } from "@shared/contexts/errorContext";
import { auth } from "@shared/src/firebase_setup/firebase";
import { updateCustomFlashcardsInDB } from "@shared/src/handles/user";

interface IProps {
  handleSubmit: HandleSubmitHookForm;
  reset: ResetHookForm;
}

export const Register = ({ handleSubmit, reset }: IProps) => {
  const { setError } = useContext(ErrorContext);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    setError(error);
  }

  const handleRegister = useCallback((data: FieldValues) => {
    const { email, password } = data;

    if (!loading) {
      createUserWithEmailAndPassword(email, password);
      reset({
        email: "",
        password: "",
      });
    }
  }, []);

  if (user) {
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
