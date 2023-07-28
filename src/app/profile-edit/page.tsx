import Image from "next/image";
import styles from "./profile-edit.module.css";
import ProfilePicture from "/src/app/assets/profile/ton-linkedin.png";
import ButtonEdit from "../components/button-edit/button-edit";
import StoryItem from "../components/story-item/story-item";

export default function Profile() {
  return (
    <div className={styles.profile_edit_container}>
      <div className={styles.profile_edit_title_container}>
        <div className={styles.profile_edit_title_left}>
          <span>Cancel</span>
        </div>
        <div className={styles.profile_edit_title_center}>
          <span>Edit Profile</span>
        </div>
        <div className={styles.profile_edit_title_right}>
          <span>Done</span>
        </div>
      </div>
      <div className={styles.profile_picture_container}>
        <Image
          src={ProfilePicture}
          alt="Profile Picture"
          height={100}
          width={100}
          className={styles.profile_edit_picture}
        />
      </div>
      <div className={styles.profile_description_container}>
        <h1>Ton Jiropas</h1>
        <span>
          Everyone has a story to tell.
          <br />
          Tag <a>#jurgun</a> to take part.
        </span>
      </div>
      <div>
        <ButtonEdit />
      </div>
      <div>
        <span>
          <br />
        </span>
      </div>
      <div className={styles.story_container}>
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
      </div>
    </div>
  );
}
