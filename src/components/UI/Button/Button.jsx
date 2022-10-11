import React from "react";
import "./Button.css";

const Button = ({ children, className, onClick }) => {
  return (
    <div className={`button ${className}`}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
