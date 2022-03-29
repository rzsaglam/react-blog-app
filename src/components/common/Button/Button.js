import React from "react";
import styles from "./styles.module.css";

function Button({ children, onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
