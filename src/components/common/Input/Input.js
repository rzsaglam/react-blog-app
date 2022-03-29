import React from "react";
import styles from "./styles.module.css";

export default function Input({
  placeholder,
  type,
  name,
  onChange,
  onBlur,
  value,
}) {
  return (
    <div className={styles.container}>
      <span className={styles.placeholder}>{placeholder}</span>
      <input
        className={styles.input}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
}
