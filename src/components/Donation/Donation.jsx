import React from "react";
import "./Donation.css";
import Button from "../UI/Button/Button";

const Donation = () => {
  return (
    <div className="donation">
      <div className="donation__name">
        <img
          className="donation__name_img"
          src="/media/buy-icon.svg"
          alt="Покупка доната"
        />
        <h2>Покупка доната</h2>
      </div>
      <div className="donation__input_wrapper">
        <input
          className="donation__input"
          type="text"
          placeholder="Введите ваш ник-нейм"
        />
        <Button className="donation__input_button">
          <img src="/media/arrow-icon.svg" alt="" />
        </Button>
      </div>
      <img
        src="/media/chest.svg"
        alt=""
        className="donation__chest"
        width={193}
        height={193}
      />
      <img
        className="donation__background donation__background1"
        src="/media/donation-item1.svg"
        alt=""
      />
      <img
        className="donation__background donation__background2"
        src="/media/donation-item2.svg"
        alt=""
      />
      <img
        className="donation__background donation__background3"
        src="/media/donation-item3.svg"
        alt=""
      />
      <img
        className="donation__background donation__background4"
        src="/media/donation-item4.svg"
        alt=""
      />
      <img
        className="donation__background donation__background5"
        src="/media/donation-item4.svg"
        alt=""
      />
    </div>
  );
};

export default Donation;
