import React, { useState } from "react";
import { COMMENT_POST } from "../../api";
import EnviarComment from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import styles from './PhotoCommentsForm.module.css';

function PhotoCommentsForm({ id, setComments }) {
  const [comment, setComment] = useState("");
  const { error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComments((comments) => [...comments, json]);
      setComment("");
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
      className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <img src={EnviarComment} alt="Enviar" />
      </button>
      <Error error={error} />
    </form>
  );
}

export default PhotoCommentsForm;
