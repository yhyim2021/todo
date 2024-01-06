import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import style from "./App.module.css";
import StateContextProvider from "./states/stateContext";
import TodosContextProvider from "./states/todosContext";
import { useContext } from "react";
import { DarkLightContext } from "./states/darkLightContext";

export default function App() {
  const { mode } = useContext(DarkLightContext);
  return (
    <>
      <div
        className={
          mode ? `${style.dark} ${style.app}` : `${style.light} ${style.app}`
        }
      >
        <StateContextProvider>
          <TodosContextProvider>
            <Header />
            <Main />
            <Footer />
          </TodosContextProvider>
        </StateContextProvider>
      </div>
    </>
  );
}
