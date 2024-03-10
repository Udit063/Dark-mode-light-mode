import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// this is only use when someone wants to consume the state -> add values or get the values
export default function useTheme() {
  return useContext(ThemeContext);
}
