import React, { useContext, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Input from "../components/UI/Input/Input";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import BanModal from "../components/BanModal/BanModal";
import { globalContext } from "../context";

const Ban = () => {
  const [value, setValue] = useState("");
  const [nickname, setNickname] = useState(
    localStorage.getItem("nick-banned") || null
  );
  const [modal, setModal] = useState(false);
  const { isMobile } = useContext(globalContext);
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
                placeholder="Введите ваш ник-нейм"
              />
              <Link to={""}>
                <Button className="ban-page__input_button input__button">
                  <img
                    onClick={() => {
                      setNickname(value);
                      localStorage.setItem("nick-banned", value);
                      if (nickname) {
                        setModal(true);
                      }
                    }}
                    src="/media/arrow-icon.svg"
                    alt=""
                  />
                </Button>
              </Link>
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
