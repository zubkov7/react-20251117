import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { Button } from "../button/button";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router";
import classNames from "classnames";

import styles from "./headphone-tab-container.module.css";

export const HeadphoneTabContainer = ({ id, onClick, isActive }) => {
  const headhpone = useSelector((state) => selectHeadphoneById(state, id));
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const brandId = searchParams.get("brandId");
  const handleClick = setSearchParams({ brandId: "some id" });

  console.log(location);

  if (!headhpone) {
    return;
  }

  return (
    // <Link to={`/headphones/${id}`}>{headhpone.name}</Link>
    // <NavLink
    //   to={`/headphones/${id}`}
    //   className={({ isActive }) =>
    //     classNames(styles.root, { [styles.active]: isActive })
    //   }
    // >
    //   {/* {headhpone.name} */}
    //   {({ isActive }) => (isActive ? "active" : headhpone.name)}
    // </NavLink>

    <>
      <title>123123</title>
      <Button
        title={headhpone.name}
        onClick={() => navigate(`/headphones/${id}`)}
        disabled={isActive}
      />
    </>
  );
};
