import Image from "next/image";
import styles from "./interest.module.css";
import ProfilePicture from "/src/app/assets/profile/ton-linkedin.png";
import ButtonEdit from "../components/button-edit/button-edit";
import ButtonCustom from "../components/button-custom/button-custom";
import StoryItem from "../components/story-item/story-item";
import ToggleSwitch from "../components/toggle/toggle";

export default function Profile() {
  return (
    <div className={styles.interest_container}>
      <ToggleSwitch label="ชวนไปเจอกัน" />
      <hr className={styles.line_break} />
      <ToggleSwitch label="ตีแบดมินตัน" />
      <hr className={styles.line_break} />
      <ToggleSwitch label="เล่นบอร์ดเกม" />
    </div>
  );
}
