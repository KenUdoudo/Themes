import { createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = () => {
  
  const [theme, setTheme] = useState('light');
  const toggleLight = () =>{
    setTheme('light')
  }
  const toggleDark = () =>{
    setTheme('dark')
  }
};
return (
  <ThemeContext.Provider value={{theme, toggleLight, toggleDark}}>

  </ThemeContext.Provider>
)