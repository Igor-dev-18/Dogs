import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button>Entrar</button>
      </form>
    </section>
  );
}

export default LoginForm;