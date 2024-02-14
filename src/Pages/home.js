import React from "react";
import { Link } from "react-router-dom";
import {
  faUserCircle,
  faClipboard,
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";
import heroImage from "../assets/cd-mercadolivre.png";
import aboutImage from "../assets/cd-mercadolivre-2.jpg";
import "./Pages.css";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div>
                <h1>Ocorrências em Centros de Distribuição</h1>
                <p>
                  Bem-vindo à nossa plataforma, onde você pode registrar e
                  consultar ocorrências em tempo real em centros de
                  distribuição.
                </p>
                <Link className="card-link" to="/occurrence-report">
                  <button className="button-primary">
                    Registrar uma ocorrência
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-end">
              <img className="hero-image" src={heroImage} alt="Logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="row justify-between">
            <div className="col-lg-5 d-flex align-items-center">
              <img className="about-image" src={aboutImage} alt="Logo" />
            </div>
            <div className="col-lg-6">
              <h1>O que é a <strong className="about-heading-bold">Plataforma OCD</strong> e como podemos te ajudar?</h1>
              <p>
                Este espaço foi cuidadosamente projetado para
                permitir que você documente e reporte eventos relevantes conforme
                as diretrizes estabelecidas pelo <strong>Mercado Livre</strong>. Valorizamos a
                transparência e a eficiência em nossas operações, e este sistema
                foi desenvolvido para facilitar a comunicação e a resolução de
                questões relacionadas à distribuição de produtos. Conte conosco
                para fornecer suporte e assistência ao longo do processo.
              </p>
          </div>
          </div>
        </div>
      </section>
      <section className="info d-none">
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
