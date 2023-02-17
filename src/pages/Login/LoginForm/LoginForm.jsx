import React, { useEffect } from "react";
import { TOKEN_POST, USER_GET } from "../../../api";
import Button from "../../../components/Forms/Button/Button";
import Input from "../../../components/Forms/Input/Input";
import useForm from "../../../Hooks/useForm";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // verificando se os campos estão preenchidos corretamente
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
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
