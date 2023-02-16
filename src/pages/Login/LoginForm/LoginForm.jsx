import React from "react";
import Button from "../../../components/Forms/Button/Button";
import Input from "../../../components/Forms/Input/Input";
import useForm from "../../../Hooks/useForm";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  function handleSubmit(e) {
    e.preventDefault();

    // verificando se os campos estão preenchidos corretamente
    if (username.validate() && password.validate()) {
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  }
  return (
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
}

export default LoginForm;
