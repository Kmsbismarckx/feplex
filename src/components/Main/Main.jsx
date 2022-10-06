import React, { useContext } from "react";
import Welcome from "../Welcome/Welcome";
import Donation from "../Donation/Donation";
import "./Main.css";
import Subscribe from "../Subscribe/Subscribe";
import OnlineInfo from "../OnlineInfo/OnlineInfo";
import { globalContext } from "../../context";
import DonationPC from "../DonationPC/DonationPC";

const Main = () => {
  const { isMobile } = useContext(globalContext);
  return (
    <div className="main">
      <Welcome />
      {isMobile ? <Donation /> : <DonationPC />}
      <Subscribe />
      <OnlineInfo />
    </div>
  );
};

export default Main;
