import React, { useEffect, useState } from "react";
import Button from "../../components/Forms/Button/Button";
import Input from "../../components/Forms/Input/Input";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import styles from "./UserPhotoPost.module.css";
import { PHOTO_POST } from "../../api";
import Error from "../../components/Helper/Error";
import { useNavigate } from "react-router-dom";

function UserPhotoPost() {
  const navigate = useNavigate();
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});

  const { data, error, loading, request } = useFetch();


  // se o data muda significa que
  //  o usuário fez a postagem de um item
  useEffect(()=>{
    if(data){
      navigate('/conta')
    }

  },[data,navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          id="img"
          name="img"
          onChange={handleImgChange}
        />

        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
      <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ background: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
}

export default UserPhotoPost;
