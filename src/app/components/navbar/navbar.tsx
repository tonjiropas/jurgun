import Link from "next/link";
import styles from "./navbar.module.css";
import IconHome from "./IconHome";
import IconSearch from "./IconSearch";
import IconBxLike from "./IconBxLike";
import IconProfile from "./IconProfile";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <Link href="/event" className={styles.nav__link}>
        <i className={styles.nav_icons}>
          <IconHome />
        </i>
        <span className={styles.nav__text}>Event</span>
      </Link>
      <Link href="/search" className={styles.nav__link}>
        <i className={styles.nav_icons}>
          <IconSearch />
        </i>
        <span className={styles.nav__text}>Search</span>
      </Link>
      <Link href="/interest" className={styles.nav__link}>
        <i className={styles.nav_icons}>
          <IconBxLike />
        </i>
        <span className={styles.nav__text}>Interest</span>
      </Link>
      <Link href="/profile" className={styles.nav__link}>
        <i className={styles.nav_icons}>
          <IconProfile />
        </i>
        <span className={styles.nav__text}>Profile</span>
      </Link>
    </div>
  );
}
