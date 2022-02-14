import React from "react";
import "./styles/Header.css";
import Tab from "./Tab";

const Header = () => {
  return (
    <header>
      <Tab title="Abraham Alvarenga" to="/" />
      <div className="section-tabs">
        <Tab title="Proyectos" id="projectsTab" to="/projects" />
        <Tab title="Sobre mi" id="infoTab" to="/about" />
      </div>
    </header>
  );
};

export default Header;
