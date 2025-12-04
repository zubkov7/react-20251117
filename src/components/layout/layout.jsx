import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { ToggleThemeButton } from "../toggle-theme-button/toggle-theme-button";

import styles from "./layout.module.css";

export const Layout = ({ children, sidebar }) => {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <ToggleThemeButton />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
