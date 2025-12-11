import { HeadphoneCounter } from "../headphone-counter/headphone-counter";

export const CartItem = ({ amount, headphoneName, headphoneId }) => {
  return (
    <span>
      {headphoneName} - {amount}
      <HeadphoneCounter headphoneId={headphoneId} />
    </span>
  );
};
