import { use } from "react";
import { Button } from "../button/button";
import { AuthContext } from "../auth-context";

import styles from "./auth-button.module.css";

export const AuthButton = () => {
  const { auth, toggleAuth } = use(AuthContext);

  const { isAuthorized, name } = auth;

  return (
    <div className={styles.root}>
      {isAuthorized && name && (
        <div className={styles.userName}>{auth.name}</div>
      )}
      <Button onClick={toggleAuth} title={isAuthorized ? "Logout" : "Login"} />
    </div>
  );
};
