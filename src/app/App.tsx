import { Suspense, useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import "./styles/index.scss";
import { useTheme } from "./providers/themeProvider";
import { AboutPage } from "pages/AboutPage";
import { classNames } from "shared/lib/helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOOGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
