import { AuthButton } from "../auth-button/auth-button";
import { ToggleThemeButton } from "../toggle-theme-button/toggle-theme-button";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <span>Headphones shop</span>
      <div className={styles.rightSection}>
        <ToggleThemeButton />
        <AuthButton />
      </div>
    </header>
  );
};
