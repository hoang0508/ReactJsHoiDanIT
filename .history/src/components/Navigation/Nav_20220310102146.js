import React from "react";
import "./Nav.scss";
const Nav = () => {
  return (
    <div class="topnav">
      <a class="is-active" href="#home">
        Home
      </a>
      <a href="#news">Product</a>
      <a href="#contact">Weather</a>
      <a href="#about">Timer</a>
    </div>
  );
};

export default Nav;
