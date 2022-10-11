import React, { useEffect, useState } from "react";
import "./DonationPC.css";
import DonationItem from "../DonationItem/DonationItem";
import { useParams } from "react-router-dom";
import DonationHeader from "../DonationHeader/DonationHeader";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../style/Swiper.css";

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
  const [currentPage, setCurrentPage] = useState(0);

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
            <Swiper
              modules={[Navigation, Pagination]}
              effect
              speed={800}
              slidesPerView={1}
              loop
              pagination
              className={"customSwiper"}
              onSlideChange={(swiper) => {
                setCurrentPage(swiper.realIndex);
              }}
            >
              {donationItems.map((item) => {
                return (
                  <SwiperSlide key={item.value}>
                    <DonationItem
                      className={`slider donation-pc__footer_item`}
                      item={item}
                      modal={modal}
                      setModal={setModal}
                    >
                      {item}
                    </DonationItem>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className={`donation-pc__footer_item_indicators`}>
              {donationItems.map((item, index) => {
                if (index === currentPage) {
                  return (
                    <div
                      key={item.value}
                      className={`donation-pc__footer_indicator donation-pc__selected`}
                    ></div>
                  );
                } else {
                  return (
                    <div
                      key={item.value}
                      className={`donation-pc__footer_indicator`}
                    ></div>
                  );
                }
              })}
            </div>
          </div>
        ) : (
          <div className="donation-pc__footer">
            {donationItems.map((item) => {
              console.log(item);
              return (
                <DonationItem
                  className={"donation-pc__footer_item"}
                  key={item.value}
                  item={item}
                  modal={modal}
                  setModal={setModal}
                >
                  {item}
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
