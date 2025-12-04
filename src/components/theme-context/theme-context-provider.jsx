import { useMemo, useState } from "react";
import { ThemeContext, ToggleThemeContext } from ".";

const ActionsProvider = ({ setTheme, children }) => {
  const actions = useMemo(
    () => ({
      setTheme,
    }),
    [setTheme]
  );

  return <ToggleThemeContext value={actions}>{children}</ToggleThemeContext>;
};

const ValueProvider = ({ theme, children }) => {
  return <ThemeContext value={theme}>{children}</ThemeContext>;
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ActionsProvider setTheme={setTheme}>
      <ValueProvider theme={theme}>{children}</ValueProvider>
    </ActionsProvider>
  );
};
