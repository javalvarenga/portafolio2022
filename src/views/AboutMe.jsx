import React from "react";
import Tab from "../components/Tab";
import "./styles/AboutMe.css";
import htmlogo from "../assets/logos/HTMLogo.png";
import CssLogo from "../assets/logos/CSSlogo.png";
import jsLogo from "../assets/logos/JavascriptLogo.png";
import reactLogo from "../assets/logos/reactLogo.png";
import bootsLogo from "../assets/logos/bootstrap.png";
import nodeLogo from "../assets/logos/nodeJsLogo.png";
import phpLogo from "../assets/logos/phpLogo.png";
import mysqlogo from "../assets/logos/mysqlLogo.png";
import In from "../assets/redes/in.png";
import github from "../assets/redes/githubLogo.svg";
import twitter from "../assets/redes/twtLogo.ico";
const AboutMe = () => {
  return (
    <main className="AboutMe">
      <Tab title="Sobre Mi" to="/" />
      <section className="container-info">
        <div className="resume">
          <p>
            Mi nombre es Abraham Alvarenga, soy estudiante de ingeniería en
            sistemas y de Platzi. Hace unos años empecé la travesía de aprender
            programación para convertirme en desarrollador web y a lo largo del
            camino aprendí a manejar las principales tecnologías utilizadas en
            la industria.
          </p>

          <div className="contact">
            <ul>
              <a
                href="https://linkedin.com/in/abraham-alvarenga-972093179"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={In} alt="linkedin" />
              </a>
              <a
                href="https://github.com/javalvarenga"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://twitter.com/aalvarengaj"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={twitter} alt="twitter" id="twtLogo" />
              </a>
            </ul>
          </div>
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
              <div className="logo">
                <img src={phpLogo} alt="PHP logo" />
                <p>PHP</p>
              </div>
              <div className="logo">
                <img src={mysqlogo} alt="Mysql Logo" />
                <p>Mysql</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
