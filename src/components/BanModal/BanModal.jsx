import React, { useState } from "react";
import "../PayModal/PayModal.css";
import Button from "../UI/Button/Button";
import "../../style/variables.css";
import "./BanModal.css";
import Input from "../UI/Input/Input";
import ModalPayment from "../ModalPayment/ModalPayment";
import ModalFooter from "../ModalFooter/ModalFooter";

const BanModal = ({ setModal, isMobile, nickname }) => {
  const [payments, setPayments] = useState([
    { src: "/media/pay-variant.png", isSelected: true },
    { src: "/media/pay-variant.png", isSelected: false },
    { src: "/media/pay-variant.png", isSelected: false },
    { src: "/media/pay-variant.png", isSelected: false },
    { src: "/media/pay-variant.png", isSelected: false },
    { src: "/media/pay-variant.png", isSelected: false },
    { src: "/media/pay-variant.png", isSelected: false },
    { src: "/media/pay-variant.png", isSelected: false },
  ]);

  return (
    <div
      className={"pay-modal"}
      onClick={() => {
        setModal(false);
      }}
    >
      <div className={"pay-modal__container"}>
        <div
          className="pay-modal__content"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="container">
            {isMobile ? (
              <div className="pay-modal__content_header">
                <div className="pay-modal__content_header_info">
                  <h1>Подтверждение покупки</h1>
                  <Button
                    className="pay-modal__button"
                    onClick={() => {
                      setModal(false);
                    }}
                  >
                    <img src="/media/modal-cross.svg" alt="" />
                  </Button>
                </div>
                <div className="pay-modal__info">
                  <img src="/media/ban-modal-img.png" alt="" />
                  <p>
                    <span>Разблокировка</span> на аккаунт{" "}
                    <span>{nickname}</span>
                  </p>
                </div>
                <hr
                  style={{
                    alignSelf: "center",
                    width: "314px",
                  }}
                />
              </div>
            ) : (
              <div className="pay-modal__content_header">
                <div className="pay-modal__content_header_info">
                  <img src="/media/ban-modal-img.png" alt="" />
                  <div className="pay-modal__info">
                    <h1>Подтверждение покупки</h1>
                    <hr />
                    <p>
                      <span>Разблокировка</span> на аккаунт{" "}
                      <span>{nickname}</span>
                    </p>
                  </div>
                  <Button
                    className="pay-modal__button"
                    onClick={() => {
                      setModal(false);
                    }}
                  >
                    <img src="/media/modal-cross.svg" alt="" />
                  </Button>
                </div>
              </div>
            )}
            <div className="pay-modal__content_footer">
              <div className="pay-modal__confirmation">
                <div className="pay-modal__input_wrapper ban-modal__input_wrapper1">
                  <p>Блокировка выдана 21.07.22 по причине: Gay</p>
                </div>
                <div className="pay-modal__input_wrapper ban-modal__input_wrapper2">
                  <Input
                    placeholder={"Введите Ваш почтовый адрес"}
                    className={"pay-modal__input"}
                  />
                </div>
              </div>
              <h1 className={"pay-variant__name"}>Выберите способ оплаты</h1>
              <ModalPayment
                isMobile={isMobile}
                payments={payments}
                setPayments={setPayments}
              />
            </div>
          </div>
          <ModalFooter />
        </div>
      </div>
    </div>
  );
};

export default BanModal;
