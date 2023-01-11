import { useContext } from "react";
import { useSignOut } from "react-firebase-hooks/auth";

import { ErrorContext } from "@shared/contexts/errorContext";
import { FlashcardsContext } from "@shared/contexts/flashcardsContext";
import { setLocalStorage } from "@shared/helpers/user";
import { auth } from "@shared/src/firebase_setup/firebase";

export const Logout = () => {
  const { setUser } = useContext(FlashcardsContext);
  const { setError } = useContext(ErrorContext);
  const [signOut, , error] = useSignOut(auth);

  if (error) {
    setError(error);
  }

  const handleLogout = async () => {
    const success = await signOut();

    if (success) {
      setLocalStorage("user", null);
      setUser(null);
      alert("You are sign out");
    }
  };

  return (
    <button onClick={handleLogout} type="button">
      LOG OUT
    </button>
  );
};
