import React from "react";
import "../OccurrenceReport/OccurrenceReport.css";
import Form from "../Form/Form";

const OccurrenceReport = ({ occurrenceData }) => {
  return (
    <section className="form">
      <div className="container form-wrapper">
        <div className="form-header">
          <h1>Registro de Ocorrências em Centros de Distribuição</h1>
          <p>
            Este espaço foi projetado para permitir que você documente e reporte
            eventos relevantes conforme as diretrizes estabelecidas pelo Mercado
            Livre.
          </p>
        </div>

        <Form />
      </div>
    </section>
  );
};

export default OccurrenceReport;
