import React from "react"
export const themes = {
  light: {
    foreground: '#000000',
    background: 'red',
  },
  dark: {
    foreground: '#ffffff',
    background: 'green',
  },
};
export const ThemeContext= React.createContext(themes.dark);