import React, { useContext } from "react";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import style from "./Header.module.css";
import { StateContext } from "../states/stateContext";
import { DarkLightContext } from "../states/darkLightContext";

const status = ["all", "active", "completed"];

export default function Header() {
  const { state, handleClick } = useContext(StateContext);
  const { mode, handleModeClick } = useContext(DarkLightContext);
  return (
    <header className={style.header}>
      <div className={style.darklight} onClick={handleModeClick}>
        {mode ? <IoMoon /> : <MdSunny />}
      </div>
      <ul className={`${style.status} style.${state}`}>
        {status.map((s, index) => (
          <li key={index} onClick={handleClick} value={index}>
            {s}
          </li>
        ))}
      </ul>
    </header>
  );
}
