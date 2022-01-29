import React from "react";
import "./styles/Header.css";
import Tab from "./Tab";

const Header = () => {
  return (
    <header>
      <Tab title="Abraham Alvarenga" id="resumeTab"/>
      <div className="section-tabs" >
        <Tab title="Proyectos" id="projectsTab"/>
        <Tab title="Información" id="infoTab" />
      </div>
      <Tab title="Menú" id="menuTab" />
    </header>
  );
};

export default Header;
