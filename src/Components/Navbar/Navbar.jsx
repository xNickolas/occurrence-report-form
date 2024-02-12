import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets//ml_logo_nav.webp';
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav-header">
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul className="nav-menu-list">
            <li className="nav-menu-item">
              <Link className="nav-menu-link" to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-menu-item">
              <Link className="nav-menu-link" to="/occurrence-report" onClick={closeMenu}>Registro de Ocorrência</Link>
            </li>
            <li className="nav-menu-item">
              <Link className="nav-menu-link" to="/statistics" onClick={closeMenu}>Estatísticas</Link>
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
