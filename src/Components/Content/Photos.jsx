import React from "react";

import "./Photos.scss";
import data from "../../data/photos-src.json";

const Photos = () => {
  return (
    <div className="photos">
      <div className="photos-header">Photos</div>
      <div className="photos-gallery">
        {data.map((src) => {
          return (
            <div className="page-image" key={src.id}>
              <img src={src.thumbnail} alt="thumbnail" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Photos;
