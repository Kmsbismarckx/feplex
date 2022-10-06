import React from "react";
import "./Welcome.css";
import Button from "../UI/Button/Button";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="container">
        <h1 className="welcome__name">
          Добро пожаловать <br /> на Feplex
        </h1>
        <p className="welcome__description">Присоединяйся к игре</p>
        <Button className={"welcome__button"}>
          <p className="button__text">Feplex.com, 19132</p>
          <img
            className="button__img"
            src="/media/button-attribute.svg"
            alt=""
          />
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
