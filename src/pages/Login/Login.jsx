import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import styles from './Login.module.css';

function Login() {

  const {login} = useContext(UserContext);
  if(login === true) return <Navigate to="/conta" />
  return (
    <section className={styles.login}>
    <div className={styles.forms}>
    <Outlet />
    </div>
    </section>
  );
}

export default Login;
