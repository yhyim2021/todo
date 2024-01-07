import React, { useContext } from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import style from "./ListItem.module.css";
import { TodosContext } from "../states/todosContext";
import { StateContext } from "../states/stateContext";

export default function ListItem({
  key,
  className,
  isCompleted,
  value,
  children,
}) {
  const { setTodos, handleClick } = useContext(TodosContext);
  const { state } = useContext(StateContext);
  const handleItemDelete = (e) => {
    const { index } = e.target.dataset;
    if (index) {
      setTodos((draft) => {
        const item = draft[state][index];
        if (state === "all") {
          draft.all.splice(index, 1);
          draft.active = draft.active.filter((todo) => todo !== item);
          draft.completed = draft.completed.filter((todo) => todo !== item);
        } else {
          draft[state].splice(index, 1);
          draft.all = draft.all.filter((todo) => todo !== item);
          // const findIndex = draft.all.findIndex((todo) => todo === item);
          // draft.all.splice(findIndex, 1);
        }
        localStorage.setItem("initialState", JSON.stringify(draft));
      });
    }
  };
  return (
    <li key={key} className={`${className} ${style.container}`} value={value}>
      <div className={style.item_container} onClick={handleClick}>
        <div className={style.checkbox}>
          {isCompleted ? (
            <RiCheckboxCircleLine />
          ) : (
            <RiCheckboxBlankCircleLine />
          )}
        </div>
        <div className={style.item}>{children}</div>
      </div>
      <div className={style.trash}>
        <FaRegTrashAlt
          className={style.trashcan}
          data-index={value}
          onClick={handleItemDelete}
        />
      </div>
    </li>
  );
}
