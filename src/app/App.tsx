import { Suspense, useContext } from "react";
import "./styles/index.scss";
import { useTheme } from "./providers/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { ErrorBoundary } from "./types/ErrorBoundary";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <ErrorBoundary fallback={<p>Что-то пошло не так.</p>}>
        <Navbar />
      </ErrorBoundary>
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
