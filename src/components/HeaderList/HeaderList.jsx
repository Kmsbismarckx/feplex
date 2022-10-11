import React from "react";
import "./HeaderList.css";
import { Link } from "react-router-dom";

const HeaderList = ({ className, isVisible, setIsVisible }) => {
  return (
    <div className={`header__list ${className}`}>
      <Link
        to={"/start"}
        className="header__list_item"
        onClick={() => {
          setIsVisible(false);
        }}
      >
        <img src="/media/header-list-item1.svg" alt="" />
        <p>Как начать игру</p>
      </Link>
      <Link to={"/"} className="header__list_item">
        <img src="/media/header-list-item2.svg" alt="" />
        <p>Магазин</p>
      </Link>
      <Link to={"/"} className="header__list_item">
        <img src="/media/header-list-item3.svg" alt="" />
        <p>Контакты</p>
      </Link>
    </div>
  );
};

export default HeaderList;
