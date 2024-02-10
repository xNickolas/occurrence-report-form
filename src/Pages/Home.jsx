import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "../Pages/Home.css";
import Card from "../Components/Card/Card";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-container">
          <div>
            <h1>Registro de Ocorrências em Centros de Distribuição</h1>
            <p>
              Aqui você pode registrar ocorrências em centros de distribuição
              conforme as diretrizes da Mercado Livre.
            </p>
            <p>
              Por favor, utilize o formulário abaixo para registrar uma nova
              ocorrência:
            </p>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="cards-container">
          <div className="cards-group">
            <Card
              title="Entre na sua conta"
              icon={faUser}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              buttonText="Clique aqui"
              to="/occurrence-report"
            />
            <Link className="card-link" to="/occurrence-report">
              <Card
                title="Registro de ocorrência"
                icon={faUser}
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                buttonText="Clique aqui"
                to="/occurrence-report"
              />
            </Link>
            <Link className="card-link" to="/statistics">
              <Card
                title="Estatísticas"
                icon={faUser}
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                buttonText="Clique aqui"
                to="/statistics"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
