import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

import logo from "./Screenshot 2024-07-17 at 1.50.16 PM.png";

const Header = ({ siteName }) => {
  return (
    <div className="header">
      <div className="SiteNameContainer">
        <img className="logo" src={logo} alt="logo" />
        {/* <p className="SiteName">{siteName}</p> */}
      </div>
      <nav className="navContainer">
        <ul className="navmenu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
