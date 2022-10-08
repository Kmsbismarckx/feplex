import React from "react";
import "./DonationPC.css";
import DonationItem from "../DonationItem/DonationItem";
import { useParams } from "react-router-dom";
import DonationHeader from "../DonationHeader/DonationHeader";
import Slider from "../Slider/Slider";

const DonationPc = ({
  categories,
  setCategories,
  donationItems,
  setDonationItems,
  isMobile,
  modal,
  setModal,
}) => {
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
          isMobile={isMobile}
        />
        {!isMobile && <hr />}
        {isMobile ? (
          <div className="donation-pc__footer">
            <Slider>
              {donationItems.map((item) => {
                return (
                  <DonationItem
                    className={"donation-pc__footer_item"}
                    key={item.value}
                    item={item}
                    modal={modal}
                    setModal={setModal}
                  >
                    {item.value}
                  </DonationItem>
                );
              })}
            </Slider>
            <div className={`donation-pc__footer_item_indicators`}>
              <div className={`donation-pc__footer_indicator`}></div>
              <div className={`donation-pc__footer_indicator`}></div>
              <div className={`donation-pc__footer_indicator`}></div>
              <div className={`donation-pc__footer_indicator`}></div>
            </div>
          </div>
        ) : (
          <div className="donation-pc__footer">
            {donationItems.map((item) => {
              return (
                <DonationItem
                  className={"donation-pc__footer_item"}
                  key={item.value}
                  item={item}
                  modal={modal}
                  setModal={setModal}
                >
                  {item.value}
                </DonationItem>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationPc;
