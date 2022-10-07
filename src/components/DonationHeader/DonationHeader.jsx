import React from "react";

const DonationHeader = ({
  className,
  nick,
  categories,
  setCategories,
  donationItems,
  setDonationItems,
}) => {
  return (
    <div className={`${className}__header`}>
      <div className={`${className}__header_nickname`}>
        <img src="/media/buy-icon.svg" alt="" />
        <p>{nick}</p>
      </div>
      <div className={`${className}__header_goods`}>
        {categories.map((category, index) => {
          return (
            <div
              key={category.name}
              className={`${className}__header_goods_item ${category.active}`}
              onClick={() => {
                setCategories([
                  ...categories.map((item, i) => {
                    if (i === index) {
                      item.isSelected = true;
                      item.active = "active";
                    } else {
                      item.isSelected = false;
                      item.active = "";
                    }
                    return item;
                  }),
                ]);
                setDonationItems(category.data);
              }}
            >
              {category.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DonationHeader;
