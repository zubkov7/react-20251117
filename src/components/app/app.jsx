import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

import "./reset.css";
import "./app.css";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <HeadphonesPage />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
