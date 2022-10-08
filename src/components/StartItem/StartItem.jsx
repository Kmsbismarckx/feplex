import React from "react";
import Button from "../UI/Button/Button";
import "./StartItem.css";

const StartItem = ({ className, props }) => {
  return (
    <div className={className}>
      <h1 className={`${className}__name`}>{props.name}</h1>
      <p className={`${className}__info`}>{props.description}</p>
      <Button className={`${className}__button`}>
        <p>{props.buttonLabel}</p>
      </Button>
    </div>
  );
};

export default StartItem;
