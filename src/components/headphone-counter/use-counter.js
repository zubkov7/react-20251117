import { useState, useCallback } from "react";

export const useCount = ({ min = 0, max = 5 } = {}) => {
  const [value, setValue] = useState(min);

  const increment = useCallback(
    () => setValue((prevValue) => Math.min(prevValue + 1, max)),
    [max]
  );

  const decrement = useCallback(
    () => setValue((prevValue) => Math.max(prevValue - 1, min)),
    [min]
  );

  return {
    value,
    increment,
    decrement,
  };
};
