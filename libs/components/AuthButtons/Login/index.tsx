import classNames from "classnames";
import { UserCredential } from "firebase/auth";
import { useContext } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FieldValues } from "react-hook-form";

import { HandleSubmitHookForm } from "@shared/components/types";
import { ErrorContext } from "@shared/contexts/errorContext";
import { fetchUserFlashcards } from "@shared/helpers/user";
import { auth } from "@shared/src/firebase_setup/firebase";

//import { setCustomFlashcards } from "@shared/src/handles/user";

interface IProps {
  handleSubmit: HandleSubmitHookForm;
}

export const Login = ({ handleSubmit }: IProps) => {
  const { setError } = useContext(ErrorContext);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
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

  const handleLogin = (data: FieldValues) => {
    const { email, password } = data;

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
