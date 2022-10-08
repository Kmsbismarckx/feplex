import React from "react";
import "./Input.css";

const Input = (props) => {
  return <input {...props} className={`${props.className} input`} />;
};

export default Input;
