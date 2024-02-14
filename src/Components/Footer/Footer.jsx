import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets//ml_logo_nav.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-landing">
      <div className="footer-content-container">
        <Link to="/">
          <img src={logo} alt="" className="footer-logo"></img>
        </Link>

        <div className="footer-links">
          <Link className="nav-menu-link" to="/">
            Home
          </Link>
          <Link className="nav-menu-link" to="/occurrence-report">
            Registro de Ocorrência
          </Link>
          <Link className="nav-menu-link" to="/statistics">
            Estatísticas
          </Link>
          <a href="/">Login</a>
        </div>
      </div>
      <div className="footer-social-container">
        <div className="footer-icons">
          <a>
            <FontAwesomeIcon className="icon-social" icon={faInstagramSquare} />
          </a>
          <a>
            <FontAwesomeIcon className="icon-social" icon={faFacebookSquare} />
          </a>
          <a>
            <FontAwesomeIcon className="icon-social" icon={faLinkedin} />
          </a>
        </div>
        <p>Copyright © 1999-2024 mercadolivre.com.br.</p>
      </div>
    </footer>
  );
};

export default Footer;
