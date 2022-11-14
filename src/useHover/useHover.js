import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onClick);
      return () => {
        if (element.current) {
          element.current.removeEventListenr(`mouseenter`, onClick);
        }
      };
    }
    return typeof onClick !== "function" ? undefined : element;
  }, []);
  return element;
};
