import React from "react";
import Button from "../UI/Button/Button";
import "./DownloadGame.css";

const DownloadGame = ({ className }) => {
  return (
    <div className={className}>
      <div className={"container"}>
        <img
          className={`${className}__img`}
          src="/media/download-game-background.png"
          alt=""
        />
        <div className={`${className}__info`}>
          <h2 className={`${className}__info_name`}>
            У вас есть игра Minecraft PE?
          </h2>
          <p className={`${className}__info_text`}>
            Если на вашем устройстве еще не установлена игра Minecraft, то
            необходимо скачать ее и установить, нажав на кнопку ниже.
          </p>
          <Button className={`${className}__button`}>
            <p>Скачать игру</p>
          </Button>
        </div>
        <img className="arrow-down" src="/media/start-arrow-down.png" alt="" />
      </div>
    </div>
  );
};

export default DownloadGame;
