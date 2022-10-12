import React, { useContext, useEffect, useState } from "react";
import HeaderList from "../HeaderList/HeaderList";
import "./Header.css";
import Burger from "../UI/Burger/Burger";
import { globalContext } from "../../context";
import { Link } from "react-router-dom";

const Header = () => {
  const { isVisible, setIsVisible, isMobile } = useContext(globalContext);
  const [headerBackground, setBackground] = useState("");

  useEffect(() => {
    if (!isMobile) {
      setIsVisible(false);
      setBackground("header__active");
    }
  }, [isMobile, isVisible]);

  return (
    <div className="header__container">
      <div className={`header ${headerBackground}`}>
        <Link
          to={"/"}
          onClick={() => {
            setIsVisible(false);
          }}
          style={{ zIndex: 6 }}
          className="header__logo"
        >
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
        </Link>

        {isMobile ? (
          <Burger isVisible={isVisible} setIsVisible={setIsVisible} />
        ) : (
          <HeaderList setIsVisible={setIsVisible} isVisible={isVisible} />
        )}
        {isVisible && (
          <HeaderList
            className="active-list"
            setIsVisible={setIsVisible}
            isVisible={isVisible}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
