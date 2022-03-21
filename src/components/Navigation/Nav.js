import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
const ListLink = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/product",
    title: "Product",
  },
  {
    id: 3,
    to: "/weather",
    title: "Weather",
  },
  {
    id: 4,
    to: "/form",
    title: "Form",
  },
];

const Nav = () => {
  return (
    <div className="topnav">
      {ListLink &&
        ListLink.length > 0 &&
        ListLink.map((item) => (
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to={item.to}
            key={item.id}
          >
            {item.title}
          </NavLink>
        ))}
    </div>
  );
};

export default Nav;
