import React from "react";
import "./Footer.css";
import ShowDate from "./ShowDate";
const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        © 2025 Waterloon Technologies - All Rights Reserved
      </div>
      <div className="date">
        <ShowDate />
      </div>
    </div>
  );
};

export default Footer;
