import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navigation-list">
          <NavLink
            to="/"
            activeClassName="navigation-list__item--active"
            style={{ textDecoration: "none" }}
          >
            <li className="navigation-list__item">Home</li>
          </NavLink>
          <NavLink
            to="/recipes"
            activeClassName="navigation-list__item--active"
            style={{ textDecoration: "none" }}
          >
            <li className="navigation-list__item">Recipes</li>
          </NavLink>
          <NavLink
            to="/addrecipes"
            activeClassName="navigation-list__item--active"
            style={{ textDecoration: "none" }}
          >
            <li className="navigation-list__item">Add recipes</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
