import * as React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";
import Information from "./views/Information";

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;