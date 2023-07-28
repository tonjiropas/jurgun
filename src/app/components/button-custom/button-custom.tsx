import React from "react";
import styles from "./button-custom.module.css";

const ButtonCustom = ({ type = "button", handleClick, children }) => {
  const handleClick = () => {
    router.push("/profile-edit");
  };
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default ButtonCustom;
