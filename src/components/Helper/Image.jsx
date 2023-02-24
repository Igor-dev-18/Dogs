import React, { useState } from "react";
import styles from "./Image.module.css";
function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      {/*o evento de onLoad é ativado sempre 
             que a imagem é  carregada 100% */}
      <img onLoad={handleLoad} alt={alt} {...props} className={styles.img} />
    </div>
  );
}

export default Image;
