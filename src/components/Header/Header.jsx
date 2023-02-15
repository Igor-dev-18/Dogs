import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Dogs from "../../Assets/dogs.svg";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs | Home" className={styles.logo}>
          <img src={Dogs} alt="Dogs" />
        </Link>

        <Link to="login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}

export default Header;
