import { useState } from "react";
import { useCounter } from "./use-count";

export const Counter = ({ isVisible }) => {
  //   if (!isVisible) {
  //     return null;
  //   }
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={increment}>+</button>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
    </div>
  );
};
