import { use } from "react";
import { ThemeContext } from "../theme-context";
import { Button } from "../button/button";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
    />
  );
};
