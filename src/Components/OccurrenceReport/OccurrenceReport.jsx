import React from "react";
import "../OccurrenceReport/OccurrenceReport.css";
import Form from "../Form/Form";

const OccurrenceReport = () => {
  return (
    <section className="form form-header">
      <div className="container form-wrapper pb-0">
        <div>
          <h1>Registro de Ocorrências em Centros de Distribuição</h1>
          <p>
            Este espaço foi projetado para permitir que você documente e reporte
            eventos relevantes conforme as diretrizes estabelecidas pelo Mercado
            Livre.
          </p>
        </div>
      </div>
      <div className="container">
        <Form />
      </div>
    </section>
  );
};

export default OccurrenceReport;
