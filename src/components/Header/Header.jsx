import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Dogs from "../../Assets/dogs.svg";
import { UserContext } from "../../UserContext";

function Header() {
  const { data,userLogout } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs | Home" className={styles.logo}>
          <img src={Dogs} alt="Dogs" />
        </Link>

        {data ? (
         <>
          <Link to="conta" className={styles.login}>
            {data.nome}
          </Link>
            <button onClick={userLogout} >Sair</button>
         </>
          
       
        ) : (
          <Link to="login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
