import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <div className="containerTitle">Projects</div>
      Here is a list of the projects we are working on:
      <ul>
        <li>
          <a href="/capaoga">Capaoga</a> - a website for a small counseling
          office
        </li>
        <li>Code Coach - we website for development coaching</li>
      </ul>
    </div>
  );
};

export default Projects;
