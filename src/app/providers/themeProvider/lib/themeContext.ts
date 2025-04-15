import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme: (theme: Theme) => void;
}

// передаём корректный initial value с заглушкой для setTheme
export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {}, // заглушка
});

export const LOCAL_STORAGE_THEME_KEY = "theme";
