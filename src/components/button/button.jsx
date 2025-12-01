import styles from "./button.module.css";

export const Button = ({
  text,
  className,
  sizeVariant, // 500 | 600 | 700 m | l | xl
  color, // dark light
  viewVariant, // warning default error
}) => {
  return <button className={`${styles.root} ${className}`}>{text}</button>;
  //   return (
  //     <button
  //       className={classNames(styles.root, className, {
  //         [styles.m]: sizeVariant === "m",
  //         [styles.l]: sizeVariant === "l",
  //       })}
  //     >
  //       {text}
  //     </button>
  //   );
};
