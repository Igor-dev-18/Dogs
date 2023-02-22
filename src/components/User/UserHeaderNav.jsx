import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import MinhasFotos from "../../Assets/feed.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import AdicionarFoto from "../../Assets/adicionar.svg";
import Sair from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState();

  const { pathname } = useLocation();

  useEffect(()=>{
    setMobileMenu(false)
  },[pathname])
  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="Menu"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive} ` }>
        <NavLink to="/conta" end>
          {" "}
          <img src={MinhasFotos} alt="Minhas Fotos" />{" "}
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="estatisticas">
          {" "}
          <img src={Estatisticas} alt="Estatísticas" />{" "}
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="postar">
          {" "}
          <img src={AdicionarFoto} alt="Adicionar Foto" />{" "}
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <img src={Sair} alt="Sair" />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}

export default UserHeaderNav;
