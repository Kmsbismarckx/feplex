import React from "react";
import "./ChooseServerItem.css";

const ChooseServerItem = ({ className, props }) => {
  return (
    <div className={className}>
      <div className={`${className}_header`}></div>
      <div className={`${className}_footer`}>
        <h2>{props.name}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ChooseServerItem;
