import React from "react";
import "./Button.css";

const Button = ({ children, className, onClick, disabled }) => {
  return (
    <div className={`button ${className}`}>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default Button;
