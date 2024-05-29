import cn from "classnames";
import styles from "./Button.module.scss";

function Button({ children, ...props }) {
  return (
    <button className={cn(styles["greenButton"])} {...props}>
      {children}
      <img src="/img/arrow.svg" alt="arrow" />
    </button>
  );
}

export default Button;
