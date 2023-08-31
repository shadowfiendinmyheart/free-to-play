import React from "react";
import debounce from "../utils/debounce";
import { MOBILE_WIDTH } from "../constants/styles";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < MOBILE_WIDTH);

  React.useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile((prev) => {
        if (window.innerWidth < MOBILE_WIDTH === prev) return prev;
        return window.innerWidth < MOBILE_WIDTH;
      });
    };
    window.addEventListener("resize", debounce(updateSize, 250));

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
