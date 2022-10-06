import React from "react";
import "./HeaderList.css";

const HeaderList = ({ className, isVisible }) => {
  return (
    <div className={`header__list ${className}`}>
      <a className="header__list_item">
        <img src="/media/header-list-item1.svg" alt="" />
        <p>Как начать игру</p>
      </a>
      <a className="header__list_item">
        <img src="/media/header-list-item2.svg" alt="" />
        <p>Магазин</p>
      </a>
      <a className="header__list_item">
        <img src="/media/header-list-item3.svg" alt="" />
        <p>Контакты</p>
      </a>
    </div>
  );
};

export default HeaderList;
