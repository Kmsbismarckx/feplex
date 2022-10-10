import React, { Children, cloneElement, useEffect, useState } from "react";
import "./Slider.css";

const Slider = ({ children, currentPage, setCurrentPage }) => {
  const [pressed, setPressed] = useState(false);
  const [startX, setStartX] = useState(0);

  const mouseHandler = (e) => {
    setPressed(true);
    setStartX(e.clientX);
    this.style.cursor = "grabbing";

    console.log(startX);
  };

  useEffect(() => {
    window.addEventListener("mouseup", function (e) {
      setPressed(false);
      window.style.cursor = "grab";
      console.log(1);
    });
  }, [pressed]);

  return (
    <div className={`main__container`}>
      <div className={`wrapper`} onMouseDown={mouseHandler}>
        {children}
      </div>
    </div>
  );
};

export default Slider;
