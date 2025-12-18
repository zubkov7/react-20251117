import { useState } from "react";
import { AuthContext } from ".";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false });

  const toggleAuth = () => {
    setAuth((prev) => {
      return prev.isAuthorized
        ? { isAuthorized: false }
        : { isAuthorized: true, name: "User", id: "jg4985gj94" };
    });
  };

  return <AuthContext value={{ auth, toggleAuth }}>{children}</AuthContext>;
};
