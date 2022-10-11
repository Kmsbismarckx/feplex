import React from "react";
import Checkbox from "../UI/Checkbox/Checkbox";
import Button from "../UI/Button/Button";

const ModalFooter = () => {
  return (
    <div className={"pay-modal__footer"}>
      <div className={"modal__footer_checkbox-area"}>
        <Checkbox className="modal__footer_checkbox" />
        <p style={{ whiteSpace: "nowrap" }}>
          Согласен с{" "}
          <span style={{ color: "rgba(251, 164, 84, 1)" }}>правилами</span>
          <br />
          проекта Feplex
        </p>
      </div>
      <Button className={"modal__footer_button"}>
        <p>Перейти к оплате 1 &#8381;</p>
      </Button>
    </div>
  );
};

export default ModalFooter;
