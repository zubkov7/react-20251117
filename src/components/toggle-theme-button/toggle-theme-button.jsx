import { useContext } from "react";
import { Button } from "../button/button";
import { ToggleThemeContext } from "../theme-context";

export const ToggleThemeButton = (props) => {
  const { setTheme } = useContext(ToggleThemeContext);

  return (
    <Button
      title='toggle theme'
      onClick={() =>
        setTheme((theme) => (theme === "light" ? "dark" : "light"))
      }
    />
  );
};
