import { createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = () => {
  
  const [theme, setTheme] = useState('light');}