import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames("navbar", {}, [className])}>
      <div>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
      </div>
    </div>
  );
};
