import Link from "next/link";
import Image from "next/image";
import styles from "./topbar.module.css";
import IconBxBell from "./IconBxBell";
// import AppLogo from "/src/app/assets/jurgun-logo2.jpg";
import AppLogo from "/src/app/assets/jurgun-logo3.png";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar_left}>
        <Link href="/event">
          <Image src={AppLogo} alt="Jurgun" layout="fill" objectFit="contain" />
        </Link>
      </div>

      <div className={styles.topbar_right}>
        <Link href="/profile">
          <i className={styles.topbar_icons}>
            <IconBxBell />
          </i>
        </Link>
      </div>
    </div>
  );
}
