import React from "react";
import Button from "./Button";

const Banner = (props) => {
  return (
    <div className="banner">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div>
        <Button text="Tourism" />
        <Button text="Business" type="secondary" />
      </div>
    </div>
  );
};

export default Banner;
