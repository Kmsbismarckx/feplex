import React from "react";
import "./Category.css";

const Category = ({ children, className, onClick }) => {
  return (
    <div className={`${className} category`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Category;
