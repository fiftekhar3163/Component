import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="row">
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="image4.jpg" alt="Image 4" />
      </div>
      <div className="row">{/* Add more images here */}</div>
      {/* Add more rows here */}
    </div>
  );
};

export default Gallery;
