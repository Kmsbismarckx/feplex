import React from "react";

const Burger = ({ isVisible, setIsVisible }) => {
  return (
    <div className="header__burger">
      <img
        src="/media/burger.svg"
        alt=""
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      />
    </div>
  );
};

export default Burger;
