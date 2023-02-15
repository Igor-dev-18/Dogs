import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="login">Login / Criar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
