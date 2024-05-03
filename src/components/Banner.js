import React from "react";
import Button from "./Button";
import "../style/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="path_to_hero_image.jpg"
        alt="Hero Image"
        className="banner__image"
      />
      <div className="banner__content">
        <h1 className="banner__title">Welcome to our website</h1>
        <p className="banner__text">Discover amazing products and services</p>
      </div>
    </div>
  );
};

export default Banner;
