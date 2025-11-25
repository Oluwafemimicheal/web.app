import { createContext, useState } from "react";

export const ThemeContext = createContext()


const ThemeProvider = ({children})=>{
  const [theme, setTheme] = useState("light")

  function toggleTheme (){
    theme === "light"? "Dark" : "light"
  }

  const value = {theme, toggleTheme}

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;