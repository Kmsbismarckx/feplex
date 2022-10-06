import React, { useContext } from "react";
import "./Footer.css";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { globalContext } from "../../context";

const Footer = () => {
  const { isMobile } = useContext(globalContext);
  return (
    <div className="footer">
      <div className="container">
        <div className="contact-info">
          <p className="contact-info__item">Feplex 2022</p>
          <p className="contact-info__item">nikita@feplex.ru</p>
          <p className="contact-info__item"> ИП Агафонов Никита Андреевич</p>
          <p className="contact-info__item">ИНН 0291193330</p>
          <p className="contact-info__item">ОГРН 299190137</p>
        </div>
        <div className="footer__down">
          {isMobile ? (
            <div className="payment">
              <img
                src="/media/payment/applePay.png"
                alt=""
                className="payment__logo"
              />
              <img
                src="/media/payment/mastercard.png"
                alt=""
                className="payment__logo"
              />
              <img
                src="/media/payment/mir.png"
                alt=""
                className="payment__logo"
              />{" "}
              <img
                src="/media/payment/qiwi.png"
                alt=""
                className="payment__logo"
              />
              <img
                src="/media/payment/spay.png"
                alt=""
                className="payment__logo"
              />
              <img
                src="/media/payment/gpay.png"
                alt=""
                className="payment__logo"
              />
            </div>
          ) : (
            <div className="payment">
              <img
                src="/media/payment/applePay.png"
                alt=""
                className="payment__logo"
              />
              <img
                src="/media/payment/mastercard.png"
                alt=""
                className="payment__logo"
              />
              <img
                src="/media/payment/mir.png"
                alt=""
                className="payment__logo"
              />{" "}
              <img
                src="/media/payment/qiwi.png"
                alt=""
                className="payment__logo"
              />
              <img
                src="/media/payment/spay.png"
                alt=""
                className="payment__logo"
              />
              <img
                src="/media/payment/gpay.png"
                alt=""
                className="payment__logo"
              />
              <img
                src="/media/payment/megafon.png"
                alt=""
                className="payment__logo"
              />
              <img
                src="/media/payment/mts.png"
                alt=""
                className="payment__logo"
              />
              <img
                src="/media/payment/tele2.png"
                alt=""
                className="payment__logo"
              />
              <img
                src="/media/payment/visa.png"
                alt=""
                className="payment__logo"
              />
            </div>
          )}
          <div className="copyright">
            <p className="copyright__item">Конфиденциальность</p>
            <p className="copyright__item">Пользовательское соглашение</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
