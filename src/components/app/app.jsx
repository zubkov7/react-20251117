import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";

import "./reset.css";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

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
