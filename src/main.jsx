import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@routes/routes.jsx";
import "./i18n";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Provider } from "react-redux";
import store from "api/store";
import ScrollToTop from "components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <I18nextProvider i18n={i18n} />
        <ScrollToTop />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
);
