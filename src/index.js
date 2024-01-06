import React from "react";
import ReactDOM from "react-dom/client";
import style from "./index.module.css";
import App from "./App";
import DarkLightContextProvider from "./states/darkLightContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkLightContextProvider>
      <App />
    </DarkLightContextProvider>
  </React.StrictMode>
);
