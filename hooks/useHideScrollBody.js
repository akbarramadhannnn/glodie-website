import { useEffect } from "react";

const useHideScrollBody = (isHide) => {
  useEffect(() => {
    if (isHide) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    if (!isHide) {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }, [isHide]);
};

export default useHideScrollBody;
