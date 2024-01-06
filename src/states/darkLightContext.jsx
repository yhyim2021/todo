import React, { createContext, useState } from "react";

export const DarkLightContext = createContext();
export default function DarkLightContextProvider({ children }) {
  const [mode, setMode] = useState(false);
  const handleModeClick = () => setMode((prev) => !prev);
  return (
    <DarkLightContext.Provider value={{ mode, handleModeClick }}>
      {children}
    </DarkLightContext.Provider>
  );
}
