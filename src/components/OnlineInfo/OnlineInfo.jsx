import React from "react";
import Button from "../UI/Button/Button";
import "./OnlineInfo.css";

const OnlineInfo = () => {
  return (
    <div className="online-info">
      <div className="container">
        <h1 className="online-info__online">409 ИГРОКОВ</h1>
        <p className="online-info__text">сейчас на сервере</p>
        <Button className="online-info__button">
          <p className="button__text">Feplex.com, 19132</p>
        </Button>
      </div>
    </div>
  );
};

export default OnlineInfo;
