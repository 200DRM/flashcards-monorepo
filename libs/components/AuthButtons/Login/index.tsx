import classNames from "classnames";
import { UserCredential } from "firebase/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { fetchUserFlashcards } from "@shared/helpers/user";
import { auth } from "@shared/src/firebase_setup/firebase";
import { setCustomFlashcards } from "@shared/src/handles/user";

interface IProps {
  email: string;
  password: string;
}

export const Login = ({ email, password }: IProps) => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
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

  const handleLogin = () => {
    if (!loading) {
      signInWithEmailAndPassword(email, password).then(
        (data?: UserCredential) => {
          const userID = data?.user?.uid;

          if (userID) {
            fetchUserFlashcards(userID);
          }
        }
      );
    }
  };

  return (
    <button
      className={classNames("login", { disabled: loading })}
      onClick={handleLogin}
    >
      LOGIN
    </button>
  );
};
