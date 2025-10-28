import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./Screenshot 2024-07-17 at 1.50.16 PM.png";

const Navbar = ({ siteName }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <nav className="navbar">
        <Link className="title" to="/">
          <img className="logo" src={logo} alt="logo" />
          {/* <p className="SiteName">{siteName}</p> */}
        </Link>
        <div className="menu">
          {menuOpen ? (
            <FaTimes className="bars" onClick={toggleMenu} />
          ) : (
            <FaBars className="bars" onClick={toggleMenu} />
          )}
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          {/* <li>
            <NavLink to="/about">About</NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/nsa">No Surprise Act / Good Faith Estimate</NavLink>
          </li> */}
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          {/* <li>
            <NavLink to="location">Location</NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
