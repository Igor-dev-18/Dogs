import React, { useEffect } from "react";
import { PHOTO_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import styles from "./FeedModal.module.css";

function FeedModal({ photo,setModalPhoto }) {
  // irá ser usado paraa recuperar a foto e os comentários
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    const { response, json } = request(url, options);
    console.log(response);
  }, [photo,request]);


  function handleOutsideClick(event){
    if(event.target === event.currentTarget){
      setModalPhoto(null)
    }

  }
  return <div className={styles.modal} onClick={handleOutsideClick}>
    {error && <Error error={error} />}
    {loading && <Loading />}
    {data &&  < PhotoContent data={data} />}
   
  </div>;
}

export default FeedModal;
