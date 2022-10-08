import React from "react";
import StartItem from "../StartItem/StartItem";
import "../../App.css";

const DownloadGameList = ({ startItems }) => {
  return (
    <div className={"start-items"}>
      <div className={`start-items__container`}>
        {startItems.map((item) => {
          return <StartItem className={"start-item"} props={item} />;
        })}
      </div>
    </div>
  );
};

export default DownloadGameList;
