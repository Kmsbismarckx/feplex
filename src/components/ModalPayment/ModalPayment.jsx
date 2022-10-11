import React from "react";
import { categoryActive } from "../../functions/categoryActive";

const ModalPayment = ({ isMobile, payments, setPayments }) => {
  if (isMobile) {
    return (
      <div className="pay-modal__pay-variants">
        {payments.map((item, index) => {
          if (index < 6) {
            return (
              <div
                key={index}
                className={`pay-modal__pay-variant ${
                  item.isSelected && "pay-modal__active"
                }`}
                onClick={() => setPayments(categoryActive(index, payments))}
              ></div>
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
          <div
            className={`pay-modal__pay-variant ${
              item.isSelected && "pay-modal__active"
            }`}
            onClick={() => setPayments(categoryActive(index, payments))}
          ></div>
        );
      })}
    </div>
  );
};

export default ModalPayment;
