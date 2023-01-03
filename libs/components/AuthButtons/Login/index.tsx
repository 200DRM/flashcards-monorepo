import classNames from "classnames";
import { UserCredential } from "firebase/auth";
import { useContext } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

import styles from "@app/styles/AuthButtons.module.scss";

import { ErrorContext } from "@shared/contexts/errorContext";
import { fetchUserFlashcards } from "@shared/helpers/user";
import { auth } from "@shared/src/firebase_setup/firebase";
import { setCustomFlashcards } from "@shared/src/handles/user";

interface IProps {
  errors: any;
  handleSubmit: any;
}

export const Login = ({ errors, handleSubmit }: IProps) => {
  const { error: errorFromContext, setError } = useContext(ErrorContext);
  const { watch, formState } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  console.log("errorFromContext", errorFromContext);
  if (error && error.message !== errorFromContext?.message) {
    console.log("hey, rerender w Login");
    setError(error);
  }

  if (user) {
    const userID = user?.user?.uid;
    //userID && setCustomFlashcards(userID);

    return (
      <div>
        <p>Logged User: {user.user.email}</p>
      </div>
    );
  }

  const handleLogin = (data: any) => {
    const { email, password } = data;
    console.log("test handleLogin: ", email);

    if (!loading) {
      const loginUser = () => {
        signInWithEmailAndPassword(email, password).then(
          (data?: UserCredential) => {
            const userID = data?.user?.uid;
            if (userID) {
              fetchUserFlashcards(userID);
            }
          }
        );
      };
      loginUser();
    }
  };

  return (
    <button
      className={classNames("login", { disabled: loading })}
      onClick={handleSubmit(handleLogin)}
      type="submit"
    >
      LOGIN
    </button>
  );
};
