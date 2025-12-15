import { Outlet } from "react-router";
import { CartContainer } from "../cart/cart-container";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";

import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <CartContainer />
      <Footer />
    </div>
  );
};
