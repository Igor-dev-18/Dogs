import React, { useState } from "react";
import FeedModal from "../../components/Feed/FeedModal";
import FeedPhotos from "../../components/Feed/FeedPhotos";

function Feed() {
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
}

export default Feed;
