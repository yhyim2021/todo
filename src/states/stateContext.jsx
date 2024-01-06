import React, { createContext, useState } from "react";

export const StateContext = createContext();
export default function StateContextProvider({ children }) {
  const [state, setState] = useState("all");
  const handleClick = (e) => {
    setState(e.target.outerText);
  };
  return (
    <StateContext.Provider value={{ state, handleClick }}>
      {children}
    </StateContext.Provider>
  );
}
