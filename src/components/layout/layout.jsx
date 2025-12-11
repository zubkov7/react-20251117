import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { CartContainer } from "../cart/cart-container";

import styles from "./layout.module.css";
import { AuthContext } from "../auth-context";
import { useContext } from "react";
import { Outlet } from "react-router";

export const Layout = () => {
  const { auth } = useContext(AuthContext);
  const { isAuthorized } = auth;

  return (
    <div className={styles.root}>
      <ProgressBar />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      {isAuthorized && <CartContainer />}
      <Footer />
    </div>
  );
};
