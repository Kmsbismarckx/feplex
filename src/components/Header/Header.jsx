import React, { useContext, useEffect, useState } from "react";
import HeaderList from "../HeaderList/HeaderList";
import "./Header.css";
import Burger from "../UI/Burger/Burger";
import { globalContext } from "../../context";

const Header = () => {
  const { isVisible, setIsVisible, isMobile } = useContext(globalContext);

  useEffect(() => {
    if (!isMobile) {
      setIsVisible(false);
    }
  }, [isMobile]);
  console.log(isMobile);

  return (
    <div className="container">
      <div className="header">
        <div className="header__logo">
          <img
            className="header__logo_img"
            src="/media/header-logo.svg"
            alt="Feplex"
            width={111.4}
            height={111.4}
          />
          <p className="header__logo_text">Feplex</p>
          <img
            className="header__logo_stroke"
            src="/media/header-stroke.svg"
            alt=""
          />
        </div>
        {isMobile ? (
          <Burger isVisible={isVisible} setIsVisible={setIsVisible} />
        ) : (
          <HeaderList />
        )}
        {isVisible && (
          <HeaderList className="active-list" isVisible={isVisible} />
        )}
      </div>
    </div>
  );
};

export default Header;
