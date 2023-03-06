import React from "react";
import Input from "../../../components/Forms/Input/Input";
import Button from "../../../components/Forms/Button/Button";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../../api";
import Error from "../../../components/Helper/Error";
import Head from "../../../components/Helper/Head";

function LoginPasswordLost() {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      await request(url, options);
    }
  }
  return (
    <section>
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{color:'#4C1'}} >{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />

          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
}

export default LoginPasswordLost;
