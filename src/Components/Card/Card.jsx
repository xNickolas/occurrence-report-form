import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Card/Card.css";


const Card = ({ title, imgSrc, icon, text, buttonText, to }) => {
  return (
    <Link className="card-link" to={to}>
      <div className="card">
        <div className="card-body">
          {title && <h1>{title}</h1>}
          {imgSrc && <img src={imgSrc} alt="Imagem do Card" />}
          {icon && <FontAwesomeIcon icon={icon} className="card-icon" />}
          {text && <p>{text}</p>}
        </div>
        <div className="card-footer">
          {buttonText && <button className="card-button">{buttonText}</button>}
        </div>
      </div>
    </Link>
  );
};

export default Card;
