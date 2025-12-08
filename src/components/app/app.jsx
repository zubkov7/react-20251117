import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";

import "./reset.css";
import "./app.css";

export const App = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Layout>
          <HeadphonesPage />
        </Layout>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};
