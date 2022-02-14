import React from "react";
import Tab from "../components/Tab";
import "./styles/Projects.css";
import Clima from "../assets/others/appClima.png";
import demo from "../assets/icons/demo.svg";
import code from "../assets/icons/code.svg";
import tiendita from "../assets/others/tiendita.png";
import blog from "../assets/others/blog.png";
export const Projects = () => {
  return (
    <div className="projects">
      <Tab title="Proyectos" to="/" />
      <section className="projects-section">
        <div className="project">
          <img src={Clima} alt="" />
          <div className="project-info">
            <h3>App del Clima</h3>
            <p>
              Aplicación del clima que muestra la temperatura de cualquier
              ciudad del mundo.
            </p>
            <div className="icons">
              <a href="https://react-9xfm7w.stackblitz.io/">
                <img src={demo} alt="demo" />
              </a>
              <a
                href="https://stackblitz.com/edit/react-9xfm7w?file=src%2FApp.js"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={code} alt="code" />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={tiendita} alt="" />
          <div className="project-info">
            <h3>Tiendita</h3>
            <p>
              E-commerce con vista de productos, checkout, payment con paypal e
              integración con Google Maps que desarrolle en el curso de react
              hooks.
            </p>
            <div className="icons">
              <a
                href="https://platzi-tiendita.firebaseapp.com/#/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={demo} alt="demo" />
              </a>
              <a
                href="https://github.com/javalvarenga/platzi-tiendita"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={code} alt="code" />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={blog} alt="" />
          <div className="project-info">
            <h3>Blog</h3>
            <p>
              blog personal sobre programación, usando wordpress para facilitar
              la gestión de contenido.
            </p>
            <div className="icons">
              <a
                href="https://javalvarenga.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={demo} alt="demo" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
