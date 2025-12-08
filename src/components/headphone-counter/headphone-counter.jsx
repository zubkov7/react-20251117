import { Counter } from "../counter/counter";
import { useCount } from "./use-counter";

export const HeadphoneCounter = ({ id }) => {
  const { value, increment, decrement } = useCount({ id });

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
