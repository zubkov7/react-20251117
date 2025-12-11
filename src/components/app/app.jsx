import { HeadphonePage } from "../headphone-page/headphone-page";
import { Layout } from "../layout/layout";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

import "./reset.css";
import "./app.css";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import { HeadphonesLayout } from "../headphones-layout/headphones-layout";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<div>home page</div>} />
                {/* <Route
                  path='about'
                  element={
                    <div>
                      about page <Outlet />
                    </div>
                  }
                >
                  <Route path='contacts' element={<div>contacts page</div>} />
                  <Route path='delivery' element={<div>delivery page</div>} />
                </Route> */}
                <Route path='headphones' element={<HeadphonesLayout />}>
                  <Route path=':headphoneId' element={<HeadphonePage />} />
                </Route>
              </Route>
              <Route path='/blocked' element={<Navigate to='/' />} />
              <Route path='*' element={<div>not found</div>} />
              {/* <Layout>
                <HeadphonesPage />
              </Layout> */}
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
