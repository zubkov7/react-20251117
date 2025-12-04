import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";

import "./reset.css";
import "./app.css";
import { createContext, useState } from "react";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";

// export const ThemeContext = createContext();

// export const theme = "light";

export const App = () => {
  // const [theme, setTheme] = useState("light");

  return (
    // <ThemeContext value={{ theme, setTheme }}>
    /* <ThemeContext
        value={{
          theme: "light",
          setTheme: () => {},
          }}
          > */
    <ThemeContextProvider>
      <Layout sidebar={<HeadphonesPage />}>
        <HeadphonesPage />
      </Layout>
    </ThemeContextProvider>
    /* </ThemeContext> */
    // </ThemeContext>
  );
};
