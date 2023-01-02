import classNames from "classnames";
import React, { useState } from "react";

import styles from "@app/styles/AuthButtons.module.scss";

import { Login } from "@shared/components/AuthButtons/Login";
import { Register } from "@shared/components/AuthButtons/Register";
import { firebaseApiKey } from "@shared/src/firebase_setup/firebase";

export const AuthButtons = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return firebaseApiKey ? (
    <div className={styles.container}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.buttons}>
        <Login email={email} password={password} />
        <Register email={email} password={password} />
      </div>
    </div>
  ) : null;
};
