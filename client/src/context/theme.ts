import { createContext } from "react";

export const themes = {
  dark: {
    background: "bg-dark",
    middleground: "bg-secondary",
    foreground: "text-light",
  },
  light: {
    background: "bg-white",
    middleground: "bg-light",
    foreground: "text-black",
  },
} as const;

const ThemeContext = createContext<{
  theme: typeof themes.dark | typeof themes.light;
  toggleTheme: () => void;
}>({ theme: themes.dark, toggleTheme: () => null });

export default ThemeContext;
