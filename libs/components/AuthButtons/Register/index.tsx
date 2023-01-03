import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { auth } from "@shared/src/firebase_setup/firebase";
import { setCustomFlashcards } from "@shared/src/handles/user";

interface IProps {
  email: string;
  password: string;
}

export const Register = ({ email, password }: IProps) => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleClick = () => {
    if (!loading) {
      createUserWithEmailAndPassword(email, password);
    }
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
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
    <button onClick={handleClick} type="submit">
      {loading ? "loading" : "REGISTER"}
    </button>
  );
};
