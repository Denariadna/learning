import { Suspense, useContext } from "react";
import "./styles/index.scss";
import { useTheme } from "./providers/themeProvider";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { ErrorBoundary } from "./types/ErrorBoundary";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <ErrorBoundary fallback={<p>Что-то пошло не так.</p>}>
        <Navbar />
      </ErrorBoundary>
      <AppRouter />
    </div>
  );
};

export default App;
