import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navLinks}>
        <li>LOGO</li>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
