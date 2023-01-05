import { createContext } from "react";

export const themes = {
  dark: {
    bg: "bg-dark",
    color: "light",
  },
  light: {
    bg: "bg-light",
    color: "dark",
  },
} as const;

const ThemeContext = createContext<{
  theme: typeof themes.dark | typeof themes.light;
  toggleTheme: () => void;
}>({ theme: themes.dark, toggleTheme: () => null });

export default ThemeContext;
