import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./ErrorPage.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation("translation");

  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>{t("Произошла ошибка")}</p>
      <Button theme={ButtonTheme.CUSTOM} onClick={reloadPage}>
        {t("Обновить страницу")}
      </Button>
    </div>
  );
};
