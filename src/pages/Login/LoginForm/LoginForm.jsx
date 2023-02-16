import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Forms/Button/Button";
import Input from "../../../components/Forms/Input/Input";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>


      </form>
    </section>
  );
}

export default LoginForm;
