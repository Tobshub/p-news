import { createContext } from "react";

export const themes = {
  dark: {
    background: "bg-black",
    middleground: "bg-dark",
    foreground: "light",
  },
  light: {
    background: "bg-white",
    middleground: "bg-light",
    foreground: "black",
  },
} as const;

const ThemeContext = createContext<{
  theme: typeof themes.dark | typeof themes.light;
  toggleTheme: () => void;
}>({ theme: themes.dark, toggleTheme: () => null });

export default ThemeContext;
