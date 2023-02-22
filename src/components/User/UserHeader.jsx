import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./UserHeader.module.css";
import UserHeaderNav from "./UserHeaderNav";

function UserHeader() {
  const [title, setTitle] = useState();
  const { pathname } = useLocation();



  useEffect(() => {
    switch (pathname) {
      case "/conta/estatisticas":
        setTitle("Estatíticas");
        break;
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
