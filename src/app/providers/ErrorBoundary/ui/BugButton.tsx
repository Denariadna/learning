import { classNames } from "shared/lib/classNames/classNames";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);
  const { t } = useTranslation("translation");
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return <button onClick={onThrow}>{t("throw error")}</button>;
};
