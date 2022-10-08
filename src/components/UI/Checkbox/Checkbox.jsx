import React from "react";
import "./Checkbox.css";

const Checkbox = ({ className }) => {
  return (
    <label className="checkbox__container">
      <input className={className} type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
