import React, { useContext, useState } from "react";
import Welcome from "../Welcome/Welcome";
import Donation from "../Donation/Donation";
import "./Main.css";
import Subscribe from "../Subscribe/Subscribe";
import OnlineInfo from "../OnlineInfo/OnlineInfo";
import { globalContext } from "../../context";
import DonationPC from "../DonationPC/DonationPC";
import { useParams } from "react-router-dom";

const Main = () => {
  const [value, setValue] = useState("");
  const [nickname, setNickname] = useState(localStorage.getItem("nick") || "");
  const { isMobile } = useContext(globalContext);
  const { nick } = useParams();
  if (nick) {
    return (
      <div className="main">
        <Welcome />
        {isMobile ? <div></div> : <DonationPC />}
        {isMobile ? (
          <Subscribe />
        ) : (
          <Subscribe chestWidth={440} chestHeight={491} />
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
        <Subscribe />
      ) : (
        <Subscribe chestWidth={440} chestHeight={491} />
      )}
      <OnlineInfo />
    </div>
  );
};

export default Main;
