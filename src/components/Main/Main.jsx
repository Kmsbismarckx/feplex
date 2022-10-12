import React, { useContext, useState } from "react";
import Welcome from "../Welcome/Welcome";
import Donation from "../Donation/Donation";
import "./Main.css";
import Subscribe from "../Subscribe/Subscribe";
import OnlineInfo from "../OnlineInfo/OnlineInfo";
import { globalContext } from "../../context";
import DonationPC from "../DonationPC/DonationPC";
import { useParams } from "react-router-dom";
import PayModal from "../PayModal/PayModal";
import { useModalScroll } from "../../hooks/useModalScroll";

const Main = () => {
  const [value, setValue] = useState("");
  const [nickname, setNickname] = useState(
    localStorage.getItem("nick") || null
  );
  const donationItemsData = [
    [
      { imgSrc: "/media/donation-header-item1.png", value: "VIP" },
      { imgSrc: "/media/donation-header-item2.png", value: "MVP" },
      { imgSrc: "/media/donation-header-item3.png", value: "MVP+" },
      {
        imgSrc: "/media/donation-header-item4.png",
        value: `MVP KING`,
        dataText: "KING",
        isSpecial: true,
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
        isSpecial: true,
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
    {
      name: "Монеты",
      data: [...donationItemsData[1]],
      isSelected: false,
      active: "",
    },
  ]);
  const [donationItems, setDonationItems] = useState(categories[0].data);
  const [modal, setModal] = useState(false);

  const { isMobile, isHD } = useContext(globalContext);
  const { nick } = useParams();
  useModalScroll(modal);

  if (nick) {
    return (
      <div className="main">
        <Welcome />
        {isMobile ? (
          <DonationPC
            isMobile={isMobile}
            isHD={isHD}
            categories={categories}
            setCategories={setCategories}
            donationItems={donationItems}
            setDonationItems={setDonationItems}
            modal={modal}
            setModal={setModal}
          />
        ) : (
          <DonationPC
            categories={categories}
            setCategories={setCategories}
            donationItems={donationItems}
            setDonationItems={setDonationItems}
            modal={modal}
            setModal={setModal}
          />
        )}
        {isMobile ? (
          <Subscribe chestWidth={274} chestHeight={306} />
        ) : (
          <Subscribe chestWidth={440} chestHeight={491} />
        )}

        {modal && (
          <PayModal
            setModal={setModal}
            isMobile={isMobile}
            nickname={nick}
          ></PayModal>
        )}
        <OnlineInfo />
      </div>
    );
  }

  return (
    <div className="main">
      <Welcome />
      {isMobile ? (
        <Donation
          isMobile={isMobile}
          value={value}
          setValue={setValue}
          nickname={nickname}
          setNickname={setNickname}
        />
      ) : (
        <Donation
          isMobile={isMobile}
          value={value}
          setValue={setValue}
          nickname={nickname}
          setNickname={setNickname}
        />
      )}
      {isMobile ? (
        <Subscribe chestWidth={274} chestHeight={306} />
      ) : (
        <Subscribe chestWidth={440} chestHeight={491} />
      )}
      <OnlineInfo />
    </div>
  );
};

export default Main;
