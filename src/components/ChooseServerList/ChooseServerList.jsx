import React from "react";
import ChooseServerItem from "../ChooseServerItem/ChooseServerItem";
import "./ChooseServerList.css";

const ChooseServerList = ({ className, serverItems, isMobile }) => {
  if (isMobile) {
    return (
      <div className={className}>
        {serverItems.map((item, index) => {
          if (index < 3) {
            return (
              <ChooseServerItem
                key={index}
                className={"choose-server__list_item"}
                props={item}
              />
            );
          }
        })}
      </div>
    );
  }
  return (
    <div className={className}>
      {serverItems.map((item, index) => {
        return (
          <ChooseServerItem
            key={index}
            className={"choose-server__list_item"}
            props={item}
          />
        );
      })}
    </div>
  );
};

export default ChooseServerList;
