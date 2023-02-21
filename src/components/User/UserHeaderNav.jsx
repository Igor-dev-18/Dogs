import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import MinhasFotos from "../../Assets/feed.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import AdicionarFoto from "../../Assets/adicionar.svg";
import Sair from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

function UserHeaderNav() {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        {" "}
        <img src={MinhasFotos} alt="Minhas Fotos" /> {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="estatisticas">
        {" "}
        <img src={Estatisticas} alt="Estatísticas" /> {mobile && "Estatísticas"}
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
  );
}

export default UserHeaderNav;
