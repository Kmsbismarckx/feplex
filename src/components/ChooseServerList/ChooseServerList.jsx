import React from "react";
import ChooseServerItem from "../ChooseServerItem/ChooseServerItem";
import "./ChooseServerList.css";

const ChooseServerList = ({ className, serverItems }) => {
  return (
    <div className={className}>
      {serverItems.map((item) => {
        return (
          <ChooseServerItem
            className={"choose-server__list_item"}
            props={item}
          />
        );
      })}
    </div>
  );
};

export default ChooseServerList;
