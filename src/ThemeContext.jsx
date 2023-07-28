import { createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState('light');
  const toggleLight = () =>{
    setTheme('light')
  }
  const toggleDark = () =>{
    setTheme('dark')
  }

}