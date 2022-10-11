import React, { useContext, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DownloadGame from "../components/DownloadGame/DownloadGame";
import ChooseServerList from "../components/ChooseServerList/ChooseServerList";
import DownloadGameList from "../components/DownloadGameList/DownloadGameList";
import "../App.css";
import { globalContext } from "../context";

const Start = () => {
  const { isMobile } = useContext(globalContext);
  const [serverItems, setServerItems] = useState([
    {
      name: "Шаг 1",
      text: "Зайдите в игру Minecraft и нажмите на кнопку 'Играть'",
      imgSrc: "/media/choose-server-img.svg",
    },
    {
      name: "Шаг 2",
      text: "Зайдите в игру Minecraft и нажмите на кнопку 'Играть'",
      imgSrc: "/media/choose-server-img.svg",
    },
    {
      name: "Шаг 3",
      text: "Зайдите в игру Minecraft и нажмите на кнопку 'Играть'",
      imgSrc: "/media/choose-server-img.svg",
    },
    {
      name: "Шаг 4",
      text: "Зайдите в игру Minecraft и нажмите на кнопку 'Играть'",
      imgSrc: "/media/choose-server-img-large.svg",
    },
  ]);
  const [startItems, setStartItems] = useState([
    {
      name: "Начнем игру!",
      description:
        "Нажмите кнопку ниже, чтобы автоматически добавить сервер и начать игру уже прямо сейчас.",
      buttonLabel: "Добавить сервер",
    },
    {
      name: "Что пошло не так?",
      description:
        "Если сервер не получилось добавить автоматически,тогда следуйте инструкции ниже. Мы постарались объяснить все как можно проще!",
      buttonLabel: "Открыть инструкцию",
    },
  ]);
  return (
    <div className="start">
      <Header />
      <DownloadGame className={"download-game"} />
      <DownloadGameList startItems={startItems} isMobile={isMobile} />
      <div className={"choose-server"}>
        <div className={"choose-server__container"}>
          <h1 className={"choose-server__name"}>
            Как добавить сервер вручную?
          </h1>
          <ChooseServerList
            className={"choose-server__list"}
            serverItems={serverItems}
            isMobile={isMobile}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Start;
