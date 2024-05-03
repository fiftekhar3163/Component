import React from "react";
import Button from "./Button";
import "../style/Header.css";

const Header = () => {
  return (
    <header className="App-header">
      <h1>Beautiful Bangladesh</h1>
      <nav>
        {
          <ul className="menu">
            <li>
              <a href="#browse-homes">Homes</a>
            </li>
            <li>
              <a href="#about-us">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a id="login-btn">
                <Button />
              </a>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
};

export default Header;
