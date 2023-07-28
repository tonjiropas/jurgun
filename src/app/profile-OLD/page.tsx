import Image from "next/image";
import styles from "./profile.module.css";
import ProfilePicture from "/src/app/assets/profile/ton-linkedin.png";
import ButtonEdit from "../components/button-edit/button-edit";

export default function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_info}>
        <div className={styles.profile_picture_container}>
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            height={100}
            width={100}
            className={styles.profile_picture}
          />
        </div>
        <div className={styles.name_container}>
          <span>Ton Jiropas</span>

          <span className="text-base text-slate-400">
            I am a ....... person
          </span>
        </div>

        <div>
          <ButtonEdit children={['Edit Profile']} />
        </div>

        <div className={styles.bio_container}>
          <span>Ton Jiropas</span>
          <span>Ton Jiropas</span>
        </div>
      </div>
    </div>
  );
}
