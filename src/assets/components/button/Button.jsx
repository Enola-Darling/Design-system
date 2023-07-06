import React from "react";
import styles from "./Button.module.scss";



const Button = (props) => {
  const {label, outline, size, square} = props || null;

  return (
    <div className={`${styles.Button}
    ${outline ? styles.outline : styles.fill}
    ${size ? styles[size] : styles.md}
    ${square ? styles.square : styles.default}
    `}>
      {label&& square && label}
    </div>
  )
}

export default Button;