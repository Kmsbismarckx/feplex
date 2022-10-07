import React, { useState } from "react";
import "./Donation.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { Link, useParams } from "react-router-dom";

const Donation = ({ isMobile, value, setValue, nickname, setNickname }) => {
  const { nick } = useParams();
  console.log(nick);
  return (
    <div className="donation-container">
      <div className="donation">
        <div className="donation__header">
          <div className="donation__name">
            <img
              className="donation__name_img"
              src="/media/buy-icon.svg"
              alt="Покупка доната"
            />
            <h2>Покупка доната</h2>
          </div>

          <div className="donation__input_wrapper">
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
              className="donation__input"
              type="text"
              placeholder="Введите ваш ник-нейм"
            />
            <img
              className="donation__background donation__background4"
              src="/media/donation-item5.png"
              alt=""
            />
            <Link to={`/general/${nickname}`}>
              <Button className="donation__input_button">
                <img
                  onClick={() => {
                    setNickname(value);
                    localStorage.setItem("nick", value);
                  }}
                  src="/media/arrow-icon.svg"
                  alt=""
                />
              </Button>
            </Link>
          </div>
        </div>
        <div className="donation__footer">
          <img
            className="donation__background donation__background1"
            src="/media/donation-item1.svg"
            alt=""
          />
          <img
            className="donation__background donation__background2"
            src="/media/donation-item2.svg"
            alt=""
          />{" "}
          <img
            className="donation__background donation__background3"
            src="/media/donation-item3.svg"
            alt=""
          />
          <img
            className="donation__background donation__background5"
            src="/media/donation-item4.svg"
            alt=""
          />
          {isMobile ? (
            <img
              className="donation__chest"
              src="/media/chest.svg"
              alt=""
              width={193}
              height={193}
            />
          ) : (
            <img
              className="donation__chest"
              src="/media/chest.svg"
              alt=""
              width={318}
              height={318}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Donation;
