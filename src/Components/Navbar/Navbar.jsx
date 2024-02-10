// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets//ml_logo_nav.webp';
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="nav-header">
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul className="nav-menu-list">
            <li className="nav-menu-item">
              <Link className="nav-menu-link" to="/">Home</Link>
            </li>
            <li className="nav-menu-item">
              <Link className="nav-menu-link" to="/occurrence-report">Registro de Ocorrência</Link>
            </li>
          </ul>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
