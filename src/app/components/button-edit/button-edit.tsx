import styles from "./button-edit.module.css";

const ButtonEdit = () => {
  return (
    <a href="profile-edit">
      <button className={styles.button_edit}>Edit Profile</button>
    </a>
  );
};

export default ButtonEdit;
