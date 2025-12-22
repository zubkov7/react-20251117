import "./reset.css";
import "./app.css";

import { Layout } from "../layout/layout";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home-page";
import { HeadphonePage } from "../../pages/headphone-page";
import { HeadphoneReviewsPage } from "../../pages/headphone-reviews-page";
import { HeadphoneCodecsPage } from "../../pages/headphone-codecs-page";
import { HeadphonesPage } from "../../pages/headphones-page";
import { ErrorBoundary } from "../error-boundary/error-boundary";

export const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <AuthContextProvider>
            <ThemeContextProvider>
              <Routes>
                <Route element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path='/headphones' element={<HeadphonesPage />}>
                    <Route index element={<div>Choose headphone</div>} />
                    <Route path=':headphoneId' element={<HeadphonePage />}>
                      <Route
                        index
                        element={<Navigate to='reviews' replace />}
                      />
                      <Route
                        path='reviews'
                        element={<HeadphoneReviewsPage />}
                      />
                      <Route path='codecs' element={<HeadphoneCodecsPage />} />
                    </Route>
                  </Route>
                </Route>
              </Routes>
            </ThemeContextProvider>
          </AuthContextProvider>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
