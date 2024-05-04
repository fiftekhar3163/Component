import React from "react";

const Gallery = (props) => {
  if (props.images.length === 0) {
    return <h2>No images found</h2>;
  }
  return (
    <div className="gallery">
      <div className="gallery-wrapper">
        {props.images.map((image, ind) => (
          <div className="image-item" key={ind}>
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
