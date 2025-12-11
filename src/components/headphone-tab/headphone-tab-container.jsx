import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { Button } from "../button/button";

export const HeadphoneTabContainer = ({ id, onClick, isActive }) => {
  const headhpone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headhpone) {
    return;
  }

  return (
    <Button title={headhpone.name} onClick={onClick} disabled={isActive} />
  );
};
