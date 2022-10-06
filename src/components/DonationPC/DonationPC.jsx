import React from "react";
import "./DonationPC.css";

const DonationPc = () => {
  return (
    <div className="donation-pc__container">
      <div className="donation-pc">
        <div className="donation-pc__header">
          <div className="donation-pc__header_nickname">
            <img src="/media/buy-icon.svg" alt="" />
            <p>Nikita</p>
          </div>
          <div className="donation-pc__header_goods">
            <div className="donation-pc__header_goods_item">Привелегии</div>
            <div className="donation-pc__header_goods_item">Ключи</div>
            <div className="donation-pc__header_goods_item">Наборы</div>
            <div className="donation-pc__header_goods_item">Монеты</div>
          </div>
        </div>
        <hr />
        <div className="donation-pc__footer">
          <div className="donation-pc__footer_item"></div>
          <div className="donation-pc__footer_item"></div>
          <div className="donation-pc__footer_item"></div>
          <div className="donation-pc__footer_item"></div>
        </div>
      </div>
    </div>
  );
};

export default DonationPc;
