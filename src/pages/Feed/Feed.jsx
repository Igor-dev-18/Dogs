import React, { useEffect, useState } from "react";
import FeedModal from "../../components/Feed/FeedModal";
import FeedPhotos from "../../components/Feed/FeedPhotos";
import PropTypes from "prop-types";

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1, 2]);
  const [infinite, setInfinite] = useState(true);
  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        // verificar se o usuário já chegou no final da página
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    // evento ativado toda vez que o botão de scroll é ativado
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    // remover antes do componente ser removido
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          page={page}
          user={user}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
}

Feed.defaultProps = {
  user: 0,
};
Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
export default Feed;
