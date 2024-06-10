import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@routes/routes.jsx";
import "./i18n";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>,
);
