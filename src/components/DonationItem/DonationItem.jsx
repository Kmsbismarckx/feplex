import React from "react";
import Button from "../UI/Button/Button";
import "./DonationItem.css";

const DonationItem = ({ className, item, children, setModal }) => {
  let special = item.specialClass || "";

  return (
    <div className={className + " " + special}>
      <div className={`${className}_header`}>
        <img className={`${className}_header_img`} src={item.imgSrc} alt="" />
        <p data-text={item.dataText}>{children}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <hr className="line" width={270} noshade="true" />
      </div>
      <div className={`${className}_footer`}>
        <div className={`${className}_footer_item`}>
          <h2>Первое</h2>
          <p>Дополнительный текст</p>
        </div>
        <div className={`${className}_footer_item`}>
          <h2>Второе</h2>
          <p>Дополнительный текст</p>
        </div>
        <div className={`${className}_footer_item`}>
          <h2>Третье</h2>
          <p>Дополнительный текст</p>
        </div>
        <Button
          onClick={() => {
            setModal(true);
            localStorage.setItem(
              "modal-data",
              JSON.stringify([item.value, item.imgSrc])
            );
          }}
          className={className + "_button"}
        >
          1 &#8381;
        </Button>
      </div>
    </div>
  );
};

export default DonationItem;
