import { useEffect } from "react";

export const useCheckboxHandler = (isChecked, setButtonDisabled) => {
  useEffect(() => {
    if (isChecked) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [isChecked]);
};
