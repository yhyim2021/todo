import React from "react";
import ReactDOM from "react-dom/client";
import style from "./index.module.css";
import App from "./App";
import DarkLightContextProvider from "./states/darkLightContext";
import StateContextProvider from "./states/stateContext";
import TodosContextProvider from "./states/todosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkLightContextProvider>
      <StateContextProvider>
        <TodosContextProvider>
          <App />
        </TodosContextProvider>
      </StateContextProvider>
    </DarkLightContextProvider>
  </React.StrictMode>
);
