import { useTheme } from "app/providers/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/light_theme.svg";
import DarkIcon from "shared/assets/icons/dark_theme.svg";
import { Theme } from "app/providers/themeProvider";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <DarkIcon height={40} width={40} />
      ) : (
        <LightIcon height={40} width={40} />
      )}
    </Button>
  );
};
