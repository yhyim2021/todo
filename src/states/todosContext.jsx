import React, { createContext, useState } from "react";
import { useImmer } from "use-immer";

// export const initialState = {
//   all: ["공부하기", "밥 먹기", "운동하기", "영화 보기"],
//   active: ["공부하기", "운동하기"],
//   completed: ["밥 먹기", "영화 보기"],
// };

export const initialState = {
  all: [],
  active: [],
  completed: [],
};

export const TodosContext = createContext();
export default function TodosContextProvider({ children }) {
  const [todos, setTodos] = useImmer(initialState);
  console.log(todos);
  const handleClick = (e) => {
    const item = e.target.outerText;
    console.log(item, todos["active"].includes(item));
    if (todos["active"].includes(item)) {
      setTodos((draft) => {
        const index = draft.active.findIndex((todo) => todo === item);
        draft.active.splice(index, 1);
        draft.completed.push(item);
      });
    } else {
      setTodos((draft) => {
        const index = draft.completed.findIndex((todo) => todo === item);
        draft.completed.splice(index, 1);
        draft.active.push(item);
      });
    }
  };
  return (
    <TodosContext.Provider value={{ todos, setTodos, handleClick }}>
      {children}
    </TodosContext.Provider>
  );
}
