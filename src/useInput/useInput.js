import { useState } from "react";

export const useInput = (initValue, vaildator) => {
  const [value, setValue] = useState(initValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
  };
  let update = true;
  if (vaildator === "function") {
    update = vaildator(value);
  }
  if (update) {
    return { value, onChange };
  }
};
