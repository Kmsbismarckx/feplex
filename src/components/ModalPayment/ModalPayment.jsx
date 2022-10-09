import React from "react";
import { categoryActive } from "../../functions/categoryActive";

const ModalPayment = ({ isMobile, payments, setPayments }) => {
  if (isMobile) {
    return (
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
                onClick={() => setPayments(categoryActive(index, payments))}
              />
            );
          }
        })}
      </div>
    );
  }
  return (
    <div className="pay-modal__pay-variants">
      {payments.map((item, index) => {
        return (
          <img
            className={`pay-modal__pay-variant ${
              item.isSelected && "pay-modal__active"
            }`}
            src={item.src}
            alt=""
            onClick={() => setPayments(categoryActive(index, payments))}
          />
        );
      })}
    </div>
  );
};

export default ModalPayment;
