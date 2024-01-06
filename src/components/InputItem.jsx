import React, { useContext } from "react";
import { TodosContext } from "../states/todosContext";
import style from "./InputItem.module.css";

export default function InputItem() {
  const { setTodos } = useContext(TodosContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.firstChild.value);
    const newItem = e.target.firstChild.value;
    if (newItem.trim().length === 0) {
      e.target.firstChild.value = "";
      return;
    }
    setTodos((draft) => {
      if (draft["all"].includes(newItem) !== true) {
        draft.all.push(newItem);
        draft.active.push(newItem);
      }
    });
    e.target.firstChild.value = "";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="new-item"
          id="new-item"
          className={style.inputbox}
          placeholder="Add Todo"
        />
        <button className={style.button}>Add</button>
      </form>
    </>
  );
}
