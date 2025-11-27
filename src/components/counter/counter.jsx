import { useEffect } from "react";
import { useCount } from "./use-counter";

export const Counter = () => {
  const { value, increment, decrement } = useCount();

  useEffect(() => {
    // effect
    console.log("mount");

    // cleanup effect
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    // effect
    console.log("effect", value);

    // cleanup effect
    return () => {
      console.log("cleanup", value);
    };
  }, [value]);

  console.log("render");

  useEffect(() => {
    increment();
  }, [increment]);

  return (
    <div>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
};

// change deps
// [1, 2]
// [1, 3]
