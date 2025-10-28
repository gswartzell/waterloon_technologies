import "./Header.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from ".images/Screenshot 2024-07-17 at 1.50.16 PM.png";

const Header = ({ siteName }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header">
      <div className="SiteNameContainer">
        <img className="logo" src={logo} alt="logo" />
        <p className="SiteName">{siteName}</p>
      </div>
      <nav>
        <Link className="title" to="/">
          Home
        </Link>
        <div className="menu">
          {menuOpen ? (
            <FaTimes className="bars" onClick={toggleMenu} />
          ) : (
            <FaBars className="bars" onClick={toggleMenu} />
          )}
        </div>
        <div className="navmenu">
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
