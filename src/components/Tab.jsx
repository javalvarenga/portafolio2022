import React from "react";
import arrow from "../assets/icons/arrow.svg";
import { Link } from "react-router-dom";
import "./styles/Tab.css";
const Tab = ({ title,id,to }) => {

  
  return (
    <Link to={to} id={id}>
      <div className="tab" >
        <h6>{title}</h6>
        {title !== "Abraham Alvarenga" && (
          <img src={arrow} alt="extend"/>
        )}
      </div>
    </Link>
  );
};

export default Tab;
