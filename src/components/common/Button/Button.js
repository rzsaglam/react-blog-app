import React from "react";
import styles from "./styles.module.css";

function Button({ children, onClick, style }) {
  return (
    <div className={style ? style : styles.container} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
