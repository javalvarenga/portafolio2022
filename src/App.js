import * as React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";
import AboutMe from "./views/AboutMe";
import { Projects } from "./views/Projects";

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<div>resume</div>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;