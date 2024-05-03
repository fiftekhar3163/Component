import React from "react";
import "../style/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </a>
        <a href="https://www.youtube.com">
          <FontAwesomeIcon icon="fa-brands fa-youtube" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
