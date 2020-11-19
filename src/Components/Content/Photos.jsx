import React, { useState } from "react";

import "./Photos.scss";
import data from "../../data/photos-src.json";
import PhotoModal from "../Modal/PhotoModal";

const Photos = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleOpen = (evt) => {
    const searchedId = parseInt(evt.target.id);
    const foundImg = data.find((img) => searchedId === img.id);

    setSelectedImg(foundImg.full);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSelectedImg("");
    }, 500);
  };

  return (
    <div className="photos">
      <div className="photos-header">Photos</div>
      <div className="photos-gallery">
        {data.map((src) => {
          return (
            <div className="photo-flex-item" key={src.id} onClick={handleOpen}>
              <img id={src.id} src={src.thumbnail} alt="thumbnail" />
            </div>
          );
        })}
      </div>
      <PhotoModal open={open} src={selectedImg} onClose={handleClose} />
    </div>
  );
};

export default Photos;
