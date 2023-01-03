import classNames from "classnames";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import styles from "@app/styles/AuthButtons.module.scss";

import { Login } from "@shared/components/AuthButtons/Login";
import { Register } from "@shared/components/AuthButtons/Register";
import { fetchUserFlashcards } from "@shared/helpers/user";
import { firebaseApiKey } from "@shared/src/firebase_setup/firebase";

export const AuthButtons = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const requiredFieldText = "This field is required";
  const isEmailEmpty = errors?.email?.type === "required";
  const isPasswordEmpty = errors?.password?.type === "required";

  const onSubmit = (data: any) =>
    console.log("onSubmit in <form /> data: ", data);

  const loginButton = useMemo(() => {
    return <Login errors={errors} handleSubmit={handleSubmit} />;
  }, [errors, handleSubmit]);

  return firebaseApiKey ? (
    <form className={styles.container}>
      <input
        className={classNames({ [styles.inputError]: isEmailEmpty })}
        placeholder="Your email..."
        type="email"
        {...register("email", { required: true })}
      />
      {isEmailEmpty ? (
        <span className={classNames(styles.error)}>{requiredFieldText}</span>
      ) : null}
      <input
        className={classNames({ [styles.inputError]: isPasswordEmpty })}
        placeholder="Your password..."
        type="password"
        {...register("password", { required: true })}
      />
      {isPasswordEmpty ? (
        <span className={classNames(styles.error)}>{requiredFieldText}</span>
      ) : null}
      <div className={styles.buttons}>
        <button type="submit">TEST</button>
        {loginButton}
        <Register email={email} password={password} />
      </div>
      <p>cooo</p>
    </form>
  ) : null;
};
