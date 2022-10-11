import React from "react";
import Button from "../UI/Button/Button";
import "./Subscribe.css";

const Subscribe = ({ chestWidth, chestHeight }) => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="subscribe__background">
          <img
            className="subscribe__background_item"
            src="/media/subscribe-item2.png"
            alt=""
          />
          <img
            className="subscribe__background_item"
            src="/media/subscribe-item1.svg"
            alt=""
            width={chestWidth}
            height={chestHeight}
          />
          <img
            className="subscribe__background_item"
            src="/media/subscribe-item3.png"
            alt=""
          />
        </div>
        <div className="subscribe__description">
          <h2 className="subscribe__description_name">
            Не упусти возможность открыть Донат кейс <span>бесплатно!</span>
          </h2>
          <p className="subscribe__description_details">
            За подписку на наш Telegram канал
          </p>
          <Button className="subscribe__button">
            <p className="button__text">Подписаться на канал</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
