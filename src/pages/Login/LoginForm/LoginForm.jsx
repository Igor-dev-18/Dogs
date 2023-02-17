import React, {useContext } from "react";
import Button from "../../../components/Forms/Button/Button";
import Input from "../../../components/Forms/Input/Input";
import useForm from "../../../Hooks/useForm";
import { UserContext } from "../../../UserContext";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const {userLogin} = useContext(UserContext);


  async function handleSubmit(e) {
    e.preventDefault();

    // verificando se os campos estão preenchidos corretamente
    if (username.validate() && password.validate()) {
     userLogin(username.value,password.value);
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
