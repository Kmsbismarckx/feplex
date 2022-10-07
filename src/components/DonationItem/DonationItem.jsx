import React from "react";
import Button from "../UI/Button/Button";
import "./DonationItem.css";

const DonationItem = ({
  className,
  imgSrc,
  children,
  specialClass,
  dataText,
}) => {
  let special = specialClass || "";

  return (
    <div className={className + " " + special}>
      <div className={`${className}_header`}>
        <img className={`${className}_header_img`} src={imgSrc} alt="" />
        <p data-text={dataText}>{children}</p>
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
        <Button className={className + "_button"}>1 &#8381;</Button>
      </div>
    </div>
  );
};

export default DonationItem;
