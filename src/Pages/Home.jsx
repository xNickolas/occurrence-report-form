import React from "react";
import { Link } from "react-router-dom";
import { faUserCircle, faClipboard, faChartBar } from "@fortawesome/free-regular-svg-icons";
import "../Pages/Pages.css";
import Card from "../Components/Card/Card";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div>
            <h1>Registro de Ocorrências em Centros de Distribuição</h1>
            <p>
              Bem-vindo à nossa plataforma, onde você pode registrar e consultar ocorrências em tempo real em centros de distribuição.
            </p>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="cards-container">
          <div className="cards-group">
            <Card
              title="Entre na sua conta"
              icon={faUserCircle}
              text="Faça login na sua conta para acessar todos os recursos da plataforma e registrar ocorrências."
              buttonText="Entrar na sua conta"
              to="/"
            />
            <Link className="card-link" to="/occurrence-report">
              <Card
                title="Registro de ocorrência"
                icon={faClipboard}
                text="Registre uma nova ocorrência relatando todos os detalhes relevantes para uma gestão eficiente."
                buttonText="Registrar ocorrência"
                to="/occurrence-report"
              />
            </Link>
            <Link className="card-link" to="/statistics">
              <Card
                title="Estatísticas"
                icon={faChartBar}
                text="Acesse as estatísticas e análises das ocorrências registradas para melhorar os processos de distribuição."
                buttonText="Visualizar ocorrências"
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
