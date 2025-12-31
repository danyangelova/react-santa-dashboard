// have a single source of truth for the theme ("dark" or "light") that is accessible throughout the app

import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext(null);

//(or destructuring { children })
export function ThemeProvider(props) {
   const children = props.children;

   const [theme, setTheme] = useLocalStorage("theme", "dark");

   useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
   }, [theme]); //reacts when 'theme' changes

   function toggleTheme() {
      setTheme((theme) => (theme === "dark" ? "light" : "dark"));
   }

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children} {/* renders everything wrapped by <ThemeProvider /> (the entire app) */}
      </ThemeContext.Provider>
   );
}

//way for the components to access theme context
export function useTheme() {
   const ctx = useContext(ThemeContext);
   if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
   return ctx;
}
