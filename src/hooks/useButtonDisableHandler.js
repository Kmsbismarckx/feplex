import { useEffect } from "react";

export const useButtonDisableHandler = (value, setButtonDisabled) => {
  useEffect(() => {
    setButtonDisabled(value.length < 1);
  }, [value]);
};
