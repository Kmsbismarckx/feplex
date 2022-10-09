import React from "react";
import StartItem from "../StartItem/StartItem";
import "../../App.css";

const DownloadGameList = ({ startItems, isMobile }) => {
  /*TODO сделать верстку для пк версии*/
  return (
    <div className={"start-items"}>
      {isMobile ? (
        <div className={`start-items__container`}>
          {startItems.map((item) => {
            return <StartItem className={"start-item"} props={item} />;
          })}
        </div>
      ) : (
        <div className={`start-items__container`}>
          <StartItem className={"start-item"} props={startItems[0]} />
          <hr />
          <StartItem className={"start-item"} props={startItems[1]} />
        </div>
      )}
    </div>
  );
};

export default DownloadGameList;
