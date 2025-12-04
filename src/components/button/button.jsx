import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({
  title,
  onClick,
  disabled,
  size = "500",
  className,
}) => {
  return (
    <button
      className={classNames(styles.root, className, {
        [styles.size500]: size === "500",
        [styles.size400]: size === "400",
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
