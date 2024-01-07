import React, { createContext } from "react";
import { useImmer } from "use-immer";

export const initialState = {
  all: [],
  active: [],
  completed: [],
};

export const TodosContext = createContext();
export default function TodosContextProvider({ children }) {
  const [todos, setTodos] = useImmer(
    localStorage.key("initialState")
      ? JSON.parse(localStorage.getItem("initialState"))
      : initialState
  );
  // console.log(todos);

  const handleClick = (e) => {
    const item = e.target.outerText;
    // console.log(item, todos["active"].includes(item));
    if (todos["active"].includes(item)) {
      setTodos((draft) => {
        const index = draft.active.findIndex((todo) => todo === item);
        draft.active.splice(index, 1);
        draft.completed.push(item);
        localStorage.setItem("initialState", JSON.stringify(draft));
      });
    } else {
      setTodos((draft) => {
        const index = draft.completed.findIndex((todo) => todo === item);
        draft.completed.splice(index, 1);
        draft.active.push(item);
        localStorage.setItem("initialState", JSON.stringify(draft));
      });
    }
  };
  return (
    <TodosContext.Provider value={{ todos, setTodos, handleClick }}>
      {children}
    </TodosContext.Provider>
  );
}
