import Image from "next/image";
import styles from "./story-item.module.css";
import StoryPicture from "/src/app/assets/profile/ton-linkedin.png";

const StoryItem = () => {
  return (
    <div className={styles.story_item}>
      <div className={styles.story_image_container}>
        <Image src={StoryPicture} alt="story" className={styles.story_image} />
      </div>
      <div className={styles.story_title}>test</div>
    </div>
  );
};

export default StoryItem;
