import React, { useContext, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Input from "../components/UI/Input/Input";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import BanModal from "../components/BanModal/BanModal";
import { globalContext } from "../context";
import { useModalScroll } from "../hooks/useModalScroll";
import { useButtonDisableHandler } from "../hooks/useButtonDisableHandler";

const Ban = () => {
  const [value, setValue] = useState("");
  const [nickname, setNickname] = useState(
    localStorage.getItem("nick-banned") || null
  );
  const [modal, setModal] = useState(false);
  const { isMobile } = useContext(globalContext);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useButtonDisableHandler(value, setButtonDisabled);
  useModalScroll(modal);

  const buttonOnClickHandler = () => {
    setNickname(value);
    localStorage.setItem("nick-banned", value);
    if (nickname) {
      setModal(true);
    }
  };

  return (
    <div className={"ban-page"}>
      <div className="ban-page__wrapper">
        <Header />
        <div className={"ban-page__main"}>
          <div className="ban-page__main_container">
            <h2 className={"ban-page__main_name"}>
              Подарите аккаунту вторую жизнь
            </h2>
            <p className={"ban-page__main_info"}>
              Для покупки разблокировки игрового аккаунта введите ваш Бан ID
            </p>
            <div className="ban-page__input_wrapper input__wrapper">
              <Input
                pattern={"[A-Za-zА-Яа-яЁё]{6,}"}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setNickname(value);
                    localStorage.setItem("nick", value);
                  }
                }}
                className="ban-page__input input"
                type="text"
                placeholder="Введите Ban ID"
              />
              <Button
                className="ban-page__input_button input__button"
                onClick={buttonOnClickHandler}
                disabled={buttonDisabled}
              >
                <img src="/media/input-button-arrow.svg" alt="" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="ban-page__art-area ">
        <div className="ban-page__art-area_container">
          {isMobile ? (
            <img src="/media/ban-page-art.png" alt="" />
          ) : (
            <img src="/media/ban-page-art-large.png" alt="" />
          )}
        </div>
        {!isMobile && (
          <img
            className={"ban-page__background-bricks"}
            src="/media/ban-page-background-bricks.png"
            alt=""
          />
        )}
      </div>
      {modal && (
        <BanModal setModal={setModal} isMobile={isMobile} nickname={nickname} />
      )}
      <Footer />
    </div>
  );
};

export default Ban;
