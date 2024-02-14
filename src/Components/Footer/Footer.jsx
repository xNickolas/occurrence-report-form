import React from 'react';
import "../Footer/Footer.css";
import logo from '../../assets//ml_logo_nav.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare, faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className='footer-landing'>
            <div className='footer-content-container'>
                <img src={logo} alt='' className='footer-logo'></img>

                <div className='footer-links'>
                    <a href='/'>Home</a>
                    <a href='/'>Registro de Ocorrência</a>
                    <a href='/'>Estatísticas</a>
                    <a href='/'>Login</a>
                </div>
            </div>
            <div className='footer-social-container'>
                <div className='footer-icons'>
                    <a><FontAwesomeIcon className='icon-social' icon={faInstagramSquare} /></a>
                    <a><FontAwesomeIcon className='icon-social' icon={faFacebookSquare} /></a>
                    <a><FontAwesomeIcon className='icon-social' icon={faLinkedin} /></a>
                </div>
                <p>Copyright © 1999-2024 mercadolivre.com.br.</p>
            </div>
        </footer>
    );
};

export default Footer;