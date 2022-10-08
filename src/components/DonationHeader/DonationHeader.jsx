import React from "react";
import Category from "../UI/Category/Category";
import { categoryActive } from "../../functions/categoryActive";

const DonationHeader = ({
  className,
  nick,
  categories,
  setCategories,
  setDonationItems,
  isMobile,
}) => {
  return (
    <div className={`${className}__header`}>
      <div className={`${className}__header_nickname`}>
        {isMobile ? (
          <img src="/media/man-icon-large.svg" alt="" />
        ) : (
          <img src="/media/buy-icon.svg" alt="" />
        )}

        <p>{nick}</p>
      </div>
      <div className={`${className}__header_goods`}>
        {categories.map((category, index) => {
          return (
            <Category
              key={category.name}
              className={`${className}__header_goods_item ${
                category.isSelected && "active"
              }`}
              onClick={() => {
                setCategories(categoryActive(index, categories));
                setDonationItems(category.data);
              }}
            >
              {category.name}
            </Category>
          );
        })}
      </div>
    </div>
  );
};

export default DonationHeader;
