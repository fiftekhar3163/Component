import React from "react";
import "../style/App.css";

const Header = () => {
  return (
    <header className="app-header">
      <h1>
        <a href="/">Beautiful Bangladesh</a>{" "}
      </h1>
      <nav>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
