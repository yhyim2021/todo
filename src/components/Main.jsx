import React, { useContext } from "react";
import { StateContext } from "../states/stateContext";
import { TodosContext } from "../states/todosContext";
import style from "../components/Main.module.css";
import ListItem from "./ListItem";

export default function Main() {
  const { state } = useContext(StateContext);
  const { todos } = useContext(TodosContext);

  return (
    <main className={style.main}>
      <ul>
        {todos[state].map((todo, index) => {
          if (state === "all") {
            if (todos["completed"].includes(todo)) {
              return (
                <ListItem
                  key={index}
                  className={`${style.li} ${style.completed}`}
                  isCompleted={true}
                  value={index}
                >
                  {todo}
                </ListItem>
              );
            }
          }
          return (
            <ListItem key={index} className={style.li} value={index}>
              {todo}
            </ListItem>
          );
        })}
      </ul>
    </main>
  );
}
