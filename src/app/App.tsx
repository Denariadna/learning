import { Suspense, useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import "./styles/index.scss";
import { useTheme } from "./providers/themeProvider";
import { AboutPage } from "pages/AboutPage";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { AppRouter } from "./router";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOOGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
