import React from "react";
import { useContext } from "react";
import AppContext from "../../context";
import cn from "classnames";
import styles from "./Info.module.scss";
import Button from "../Button/Button";

const Info = ({ title, description, image }) => {
  const { setCartOpened } = useContext(AppContext);

  return (
    <div
      className={cn(
        styles["cartEmpty"],
        "d-flex align-center justify-center flex-column flex"
      )}
    >
      <img
        className="mb-20"
        width={120}
        height={120}
        src={image}
        alt="empty cart"
      />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <Button onClick={() => setCartOpened(false)}>Вернуться назад</Button>
    </div>
  );
};

export default Info;
