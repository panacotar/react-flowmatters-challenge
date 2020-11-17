import React from "react";
import Imgix from "react-imgix";

import "./Photos.scss";
import data from "../../data/photos-src.json";

const Photos = () => {
  console.log(data);

  return (
    <div className="photos">
      <div className="photos-header">Photos</div>
      <div className="photos-gallery">
        {data.map((src) => {
          {
            /* return <img src={src.thumbnail} key={src.id} className="page-image" alt="thumbnail"  /> */
          }

          return (
            <div className="page-image">
              <Imgix
                src={src.thumbnail}
                key={src.id}
                
                imgixParams={{
                  fit: "crop",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Photos;
