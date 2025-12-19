import React, {createContext, useContext, useEffect, useState} from "react";

const ThemeCtx = createContext();
export const useTheme = () => useContext(ThemeCtx);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);
  return <ThemeCtx.Provider value={{ darkMode, setDarkMode }}>{children}</ThemeCtx.Provider>;
}
