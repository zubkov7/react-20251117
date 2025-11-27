import { useState, useCallback } from "react";

export const useCount = ({ min = 0, max = 5 } = {}) => {
  const [value, setValue] = useState(min);

  // const increment = useCallback(
  //   () => setValue(Math.min(value + 1, max)),
  //   [max, value]
  // );
  const increment = useCallback(
    () => setValue((oldValue) => Math.min(oldValue + 1, max)),
    [max]
  );

  const decrement = () => setValue(Math.max(value - 1, min));

  return {
    value,
    increment,
    decrement,
  };
};
