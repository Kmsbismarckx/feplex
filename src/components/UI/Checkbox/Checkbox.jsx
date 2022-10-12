import React from "react";
import "./Checkbox.css";

const Checkbox = ({ className, setChecked }) => {
  return (
    <label className="checkbox__container">
      <input
        className={className}
        type="checkbox"
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
