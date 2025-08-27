import React from "react";
import "./Content.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Content;
