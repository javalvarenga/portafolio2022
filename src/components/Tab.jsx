import React from "react";
import arrow from "../assets/icons/arrow.svg";
import "./styles/Tab.css";
const Tab = ({ title }) => {
  return (
    <div className="tab">
      <h6>{title}</h6>
      {title !== "Abraham Alvarenga" && <img src={arrow} alt="extend" />}
    </div>
  );
};

export default Tab;
