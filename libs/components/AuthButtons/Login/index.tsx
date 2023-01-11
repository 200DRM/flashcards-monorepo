import classNames from "classnames";
import { UserCredential } from "firebase/auth";
import { useCallback, useContext } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FieldValues } from "react-hook-form";

import { HandleSubmitHookForm, ResetHookForm } from "@shared/components/types";
import { ErrorContext } from "@shared/contexts/errorContext";
import { FlashcardsContext } from "@shared/contexts/flashcardsContext";
import { fetchCustomFlashcards, setLocalStorage } from "@shared/helpers/user";
import { auth } from "@shared/src/firebase_setup/firebase";

interface IProps {
  handleSubmit: HandleSubmitHookForm;
  reset: ResetHookForm;
}

export const Login = ({ handleSubmit, reset }: IProps) => {
  const { setError } = useContext(ErrorContext);
  const { setCustomFlashcards, setUser } = useContext(FlashcardsContext);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    setError(error);
  }

  if (user?.user) {
    const u = user.user;
    const uid = u.uid;
    const userData = {
      email: u.email || "",
      uid,
    };

    setLocalStorage("user", userData);
    setUser(userData);

    return (
      <div>
        <p>Logged User: {user.user.email}</p>
      </div>
    );
  }

  const handleLogin = useCallback((data: FieldValues) => {
    const { email, password } = data;

    if (!loading) {
      const loginUser = () => {
        signInWithEmailAndPassword(email, password).then(
          async (data?: UserCredential) => {
            const uid = data?.user?.uid;

            if (uid) {
              const usersFlashcards = await fetchCustomFlashcards(uid);

              if (usersFlashcards) {
                setCustomFlashcards(usersFlashcards);
              }
            }
          }
        );
      };
      loginUser();
      reset({
        email: "",
        password: "",
      });
    }
  }, []);

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
