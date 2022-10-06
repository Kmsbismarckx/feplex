import React from "react";
import Button from "../UI/Button/Button";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="subscribe__background">
          <img
            className="subscribe__background_item subscribe__background_item1"
            src="/media/subscribe-item1.png"
            alt=""
          />
          <img
            className="subscribe__background_item subscribe__background_item2"
            src="/media/subscribe-item2.png"
            alt=""
          />
          <img
            className="subscribe__background_item subscribe__background_item3"
            src="/media/subscribe-item3.png"
            alt=""
          />
          <img
            className="subscribe__background_item subscribe__background_item4"
            src="/media/subscribe-item4.png"
            alt=""
          />
          <img
            className="subscribe__background_item subscribe__background_item5"
            src="/media/subscribe-item5.png"
            alt=""
          />
          <img
            className="subscribe__background_item subscribe__background_item6"
            src="/media/subscribe-item6.png"
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
        </div>
        <Button className="subscribe__button">
          <p className="button__text">Подписаться на канал</p>
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
