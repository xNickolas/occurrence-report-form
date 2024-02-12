import React from 'react';
import "../OccurrenceReport/OccurrenceReport.css";
import Form from '../Form/Form'

const OccurrenceReport = ({ occurrenceData }) => {
  return (
    <section className="form">
        <div className="container form-wrapper">
          <div className='form-header'>
            <h1>Registro de Ocorrências em Centros de Distribuição</h1>
            <p>
              Aqui você pode registrar ocorrências em centros de distribuição
              conforme as diretrizes da Mercado Livre.
            </p>
          </div>

          <Form/>
        </div>
      </section>
  );
};

export default OccurrenceReport;