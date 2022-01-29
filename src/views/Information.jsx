import React from "react";
import { Link } from "react-router-dom";
import Tab from "../components/Tab";
import "./styles/Information.css";
import htmlogo from "../assets/logos/HTMLogo.png";
import CssLogo from "../assets/logos/CSSlogo.png";
import jsLogo from "../assets/logos/JavascriptLogo.png";
import reactLogo from "../assets/logos/reactLogo.png";
import bootsLogo from "../assets/logos/bootstrap.png";
import nodeLogo from "../assets/logos/nodeJsLogo.png";

const Information = () => {
  return (
    <main className="Information">
      <Tab title="Información" />
      <section className="container-info">
        <div className="contact">
          <ul>
            <Link to="/">
              <li>LinkedIn</li>
            </Link>
            <Link to="/">
              <li>Twitter</li>
            </Link>
            <Link to="/">
              <li>Gmail</li>
            </Link>
          </ul>
        </div>
        <div className="stack">
          <h2>Stack tecnológico</h2>
          <section className="front">
            <h3>Frontend</h3>
            <div className="logos">
              <div className="logo">
                <img src={htmlogo} alt="HTML logo" />
                <p>HTML</p>
              </div>
              <div className="logo">
                <img src={CssLogo} alt="HTML logo" />
                <p>CSS</p>
              </div>
              <div className="logo">
                <img src={jsLogo} alt="HTML logo" />
                <p>Javascript</p>
              </div>
              <div className="logo">
                <img src={reactLogo} alt="HTML logo" />
                <p>React</p>
              </div>
              <div className="logo">
                <img src={bootsLogo} alt="HTML logo" />
                <p>Bootstrap</p>
              </div>
            </div>
          </section>
          <section className="back">
            <h3>Backend</h3>
            <div className="logos">
              <div className="logo">
                <img src={nodeLogo} alt="Node" />
                <p>Node</p>
              </div>
{/*               <div className="logo">
                <img src={phpLogo} alt="PHP logo" />
                <p>PHP</p>
              </div>
              <div className="logo">
                <img src={mysqlogo} alt="Mysql Logo" />
                <p>Mysql</p>
              </div> */}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Information;
