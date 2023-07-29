import { createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = () => {
  
  const [theme, setTheme] = useState('light');
  const toggleTheme = () =>{
    setTheme('light')
  }
};
return (
  <ThemeContext.Provider value={{theme, toggleLight, toggleDark}}>

  </ThemeContext.Provider>
)

export {ThemeContext, ThemeProvider};