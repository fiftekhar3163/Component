import React from "react";

const Button = (props) => {
  const styles = props.type === "secondary" ? "secondary" : "";
  return (
    <button className={`app-button primary ${styles}`}>{props.text}</button>
  );
};

export default Button;
