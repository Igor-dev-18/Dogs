import React from "react";
import Input from "../../../components/Forms/Input/Input";
import Button from "../../../components/Forms/Button/Button";
import useForm from "../../../Hooks/useForm";
import { USER_POST } from "../../../api";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import useFetch from "../../../Hooks/useFetch";
import Error from "../../../components/Helper/Error";

function LoginCreate() {
  const { userLogin } = useContext(UserContext);
  const { error, loading, request } = useFetch();

  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response, json } = await request(url, options);
    console.log(response);
    if (response.ok) {
      // logar o usuário
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginCreate;
