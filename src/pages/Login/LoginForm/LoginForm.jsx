import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Forms/Button/Button";
import Input from "../../../components/Forms/Input/Input";
import Error from "../../../components/Helper/Error";
import useForm from "../../../Hooks/useForm";
import { UserContext } from "../../../UserContext";
import styles from './LoginForm.module.css';
import stylesBtn from '../../../components/Forms/Button/Button.module.css';


function LoginForm() {
  const username = useForm();
  const password = useForm();


  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    // verificando se os campos estão preenchidos corretamente
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {
          loading? <Button disabled >Carregando</Button>:<Button>Entrar</Button>
        }
      <Error error={error} />
     
      </form>
      
      <Link  className={styles.perdeu} to="perdeu">Perdeu a Senha?</Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link  className={stylesBtn.button} to="criar">Criar Conta</Link>
      </div>
    </section>
  );
}

export default LoginForm;
