import { UserContainer } from "../user/user-container";

export const Review = ({ text, userId }) => {
  return (
    <>
      {text} - <UserContainer id={userId} />
    </>
  );
};
