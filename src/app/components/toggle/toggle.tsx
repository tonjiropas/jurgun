import { useState } from "react";
import styles from "./toggle.module.css";

const ToggleSwitch = ({ label }: any) => {
  return (
    <div className="container">
      {label}
      <div className={styles.toggle_switch}>
        <input
          type="checkbox"
          className={styles.checkbox}
          name={label}
          id={label}
        />
        <label className={styles.label} htmlFor={label}>
          <span className={styles.inner} />
          <span className={styles.switch} />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
