import { Counter } from "../counter/counter";
import { useCount } from "./use-counter";

export const HeadphoneCounter = ({ id }) => {
  const { amount, increment, decrement } = useCount(id);

  return <Counter value={amount} increment={increment} decrement={decrement} />;
};
