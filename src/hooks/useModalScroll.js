import { useEffect } from "react";

export const useModalScroll = (modal) => {
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "scroll";
  }, [modal]);
};
