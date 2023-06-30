import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Index from "../../pages/Inicio";
import Mediciones from "../../pages/Mediciones";
import Sensor1page from "../../pages/Sensor1";
import Esbotonpage from "../../pages/Esboton";

import "./header.css";

const Header = () => {
  return (
    <Router>
      <div className="header">
      <div>
      <img className="logo" src="src\assets\FallAlert1.png"/>
      </div>  
      <ul>
        <h1>
        <li><Link to="/">Inicio</Link></li>
        </h1>
        <h1>
        <li><Link to="/Mediciones">Mediciones</Link></li>
        </h1>
        <h1>
        <li><Link to="/Sensor1">Sensor</Link></li>
        </h1>
        <h1>
        <li><Link to="/Boton">Botón</Link></li>
        </h1>
      </ul>
      </div>
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        <Route exact path="/Mediciones" element={<Mediciones />}></Route>
        <Route exact path="/Sensor1" element={<Sensor1page />}></Route>
        <Route exact path="/Boton" element={<Esbotonpage />}></Route>
      </Routes>
    </Router>
  );
};

export default Header;

