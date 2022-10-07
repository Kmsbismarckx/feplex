import React, { useState } from "react";
import "./DonationPC.css";
import DonationItem from "../DonationItem/DonationItem";
import { useParams } from "react-router-dom";
import DonationHeader from "../DonationHeader/DonationHeader";

const DonationPc = () => {
  const donationItemsData = [
    [
      { imgSrc: "/media/donation-header-item1.png", value: "VIP" },
      { imgSrc: "/media/donation-header-item2.png", value: "MVP" },
      { imgSrc: "/media/donation-header-item3.png", value: "MVP+" },
      {
        imgSrc: "/media/donation-header-item4.png",
        value: `MVP KING`,
        dataText: "KING",
        specialClass: "donation-special",
      },
    ],
    [
      { imgSrc: "/media/donation-keys-item1.png", value: "VIP" },
      { imgSrc: "/media/donation-keys-item2.png", value: "MVP" },
      { imgSrc: "/media/donation-keys-item3.png", value: "MVP+" },
      {
        imgSrc: "/media/donation-keys-item4.png",
        value: `MVP KING`,
        dataText: "KING",
        specialClass: "donation-special",
      },
    ],
  ];
  const [categories, setCategories] = useState([
    {
      name: "Привелегии",
      data: [...donationItemsData[0]],
      isSelected: true,
      active: "active",
    },
    {
      name: "Ключи",
      data: [...donationItemsData[1]],
      isSelected: false,
      active: "",
    },
    {
      name: "Наборы",
      data: [...donationItemsData[0]],
      isSelected: false,
      active: "",
    },
    { name: "Монеты", data: [], isSelected: false, active: "" },
  ]);

  const [donationItems, setDonationItems] = useState(categories[0].data);

  const { nick } = useParams();

  return (
    <div className="donation-pc__container">
      <div className="donation-pc">
        <DonationHeader
          className={"donation-pc"}
          nick={nick}
          categories={categories}
          setCategories={setCategories}
          donationItems={donationItems}
          setDonationItems={setDonationItems}
        />
        <hr />
        <div className="donation-pc__footer">
          {donationItems.map((item) => {
            return (
              <DonationItem
                key={item.value}
                className={"donation-pc__footer_item"}
                imgSrc={item.imgSrc}
                specialClass={item.specialClass}
                dataText={item.dataText}
              >
                {item.value}
              </DonationItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DonationPc;
