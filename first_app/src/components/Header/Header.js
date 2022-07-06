import React from "react";
import { NavLink } from "react-router-dom";
//developed
import "./Header.css";

const Header = ({ title }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <div className="links">
        <NavLink exact={true}
          to="/"  className="link" activeClassName="active-link">
          Dashboard
        </NavLink>
        <NavLink exact={true} to="/favorites" className="link" activeClassName="active-link">
        Favorites
        </NavLink>
        {/* <NavLink to="/help" className="link" activeClassName="active-link">
          Help
        </NavLink> */}
      </div>
    </header>
  );
};

export default Header;
