import React from 'react';
import { useOccurrenceContext } from "../Contexts/OccurrenceContext";

const Statistics = () => {
  const { occurrences } = useOccurrenceContext();

  return (
    <div className='container'>
      {occurrences.map((occurrence, index) => (
        <div key={index} className='occurrence-card'>
          <h3>Nome do relator: {occurrence.nomeRelator}</h3>
          <p>Título da Ocorrência: {occurrence.tituloOcorrencia}</p>
          <p>CEP: {occurrence.enderecoOcorrencia && occurrence.enderecoOcorrencia.cep}</p>
          <p>Data da Ocorrência: {occurrence.dataOcorrencia}</p>
          <p>Data de Encerramento da Ocorrência: {occurrence.dataEncerramento}</p>
          <p>Evidências: {occurrence.evidencias && occurrence.evidencias.name}</p>
          <p>Descrição da Ocorrência: {occurrence.descricaoOcorrencia}</p>
          <p>Observação da Ocorrência: {occurrence.observacaoOcorrencia}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
