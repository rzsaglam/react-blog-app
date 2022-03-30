import React from "react";
import styles from "./styles.module.css";

export default function Input({
  placeholder,
  type,
  name,
  onChange,
  onBlur,
  value,
  error,
}) {
  return (
    <div className={error ? styles.container_error : styles.container}>
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
