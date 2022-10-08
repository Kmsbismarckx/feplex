import React, { useState } from "react";
import "./PayModal.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Category from "../UI/Category/Category";
import Checkbox from "../UI/Checkbox/Checkbox";
import { categoryActive } from "../../functions/categoryActive";

const PayModal = ({ setModal, isMobile, nickname }) => {
  const rootClasses = ["pay-modal"];
  const [modalData, modalImg] = JSON.parse(localStorage.getItem("modal-data"));
  const [categories, setCategories] = useState([
    { name: "На месяц", isSelected: true },
    { name: "На 3 месяца" },
    { name: "На год" },
  ]);
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
      className={rootClasses.join(" ")}
      onClick={() => {
        setModal(false);
      }}
    >
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
                <img src={modalImg} alt="" />
                <p>
                  <span>{modalData}</span> на аккаунт <span>{nickname}</span>
                </p>
              </div>
            </div>
          ) : (
            <div className="pay-modal__content_header">
              <div className="pay-modal__content_header_info">
                <img src={modalImg} alt="" />
                <div className="pay-modal__info">
                  <h1>Подтверждение покупки</h1>
                  <hr />
                  <p>
                    <span>{modalData}</span> на аккаунт <span>{nickname}</span>
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
              <div className="pay-modal__input_wrapper pay-modal__input_wrapper1">
                <Input
                  placeholder={"Введите Ваш почтовый адрес"}
                  type={"email"}
                  className={"pay-modal__input"}
                />
              </div>
              <div className="pay-modal__input_wrapper pay-modal__input_wrapper2">
                <Input
                  placeholder={"Введите промокод, если есть"}
                  className={"pay-modal__input"}
                />
              </div>
            </div>
            <div className={"pay-modal__categories"}>
              {categories.map((category, index) => {
                return (
                  <Category
                    key={category.name}
                    className={`pay-modal__category ${
                      category.isSelected && "active"
                    }`}
                    onClick={() => {
                      setCategories(categoryActive(index, categories));
                    }}
                  >
                    <p>{category.name}</p>
                  </Category>
                );
              })}
            </div>
            <h1 className={"pay-variant__name"}>Выберите способ оплаты</h1>
            {isMobile ? (
              <div className="pay-modal__pay-variants">
                {payments.map((item, index) => {
                  if (index < 6) {
                    return (
                      <img
                        key={index}
                        className={`pay-modal__pay-variant ${
                          item.isSelected && "pay-modal__active"
                        }`}
                        src={item.src}
                        alt=""
                        onClick={() =>
                          setPayments(categoryActive(index, payments))
                        }
                      />
                    );
                  }
                })}
              </div>
            ) : (
              <div className="pay-modal__pay-variants">
                {payments.map((item, index) => {
                  return (
                    <img
                      className={`pay-modal__pay-variant ${
                        item.isSelected && "pay-modal__active"
                      }`}
                      src={item.src}
                      alt=""
                      onClick={() =>
                        setPayments(categoryActive(index, payments))
                      }
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className={"pay-modal__footer"}>
          <div className={"modal__footer_checkbox-area"}>
            <Checkbox className="modal__footer_checkbox" />
            <p>
              Согласен с{" "}
              <span style={{ color: "rgba(251, 164, 84, 1)" }}>правилами</span>{" "}
              проекта Feplex
            </p>
          </div>
          <Button className={"modal__footer_button"}>
            <p>Перейти к оплате 1 &#8381;</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PayModal;
