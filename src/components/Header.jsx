import React from "react";
import "./styles/Header.css";
import Tab from "./Tab";

const Header = () => {
  return (
    <header>
      <Tab title="Abraham Alvarenga" />
      <div className="section-tabs">
        <Tab title="Proyectos" />
        <Tab title="Información" />
      </div>
    </header>
  );
};

export default Header;
