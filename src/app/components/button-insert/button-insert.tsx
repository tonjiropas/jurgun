import React from "react";
import styles from "./button-custom.module.css";

const ButtonCustom = ({ type = "button", handleClick, children }) => {


  MethodOnClick(i) {
    if (Number(this.state.q_ptr) >= this.state.Questions.length - 1) {
      return;
    }

    this.setState({
      selectedChoiceIndx: i,
    });

    axios
      .post("/api/submit-answer", {
        username: "TJ",
        question_id: this.state.q_ptr + 1,
        choice: i,
      })
      .then((res) => {
        //wait for chaloey
      })
      .catch((err) => {
        alert("รอเฉลย");
      });
  }


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
