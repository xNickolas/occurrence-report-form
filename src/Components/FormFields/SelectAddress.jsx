import React, { useState } from 'react';
import axios from 'axios';

const EnderecoCEP = ({ onEnderecoSelecionado }) => {
  const [cep, setCep] = useState('');
  const [enderecos, setEnderecos] = useState([]);
  const [enderecoSelecionado, setEnderecoSelecionado] = useState(null);

  const handleCepChange = (e) => {
    const { value } = e.target;
    setCep(value);
  };

  const buscarEndereco = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { data } = response;

      if (!data.erro) {
        setEnderecos([data]);
        setEnderecoSelecionado(null);
      } else {
        console.error('CEP não encontrado');
        setEnderecos([]);
        setEnderecoSelecionado(null);
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };

  const handleEnderecoSelecionado = (endereco) => {
    setEnderecoSelecionado(endereco);
    onEnderecoSelecionado(endereco);
  };

  return (
    <div className='form-group'>
      <label className='form-label'>CEP</label>
      <input
        className='form-control'
        type="text"
        value={cep}
        onChange={handleCepChange}
      />
      <button className='button-secondary' onClick={buscarEndereco}>Buscar Endereço</button>

      {enderecos.length > 0 && (
        <div>
          <label className='form-label'>Selecione um endereço:</label>
          {enderecos.map((endereco, index) => (
            <div key={endereco.cep}>
              <input
                type="radio"
                id={`endereco-${index}`}
                name="endereco"
                value={endereco.logradouro}
                checked={endereco === enderecoSelecionado}
                onChange={() => handleEnderecoSelecionado(endereco)}
              />
              <label htmlFor={`endereco-${index}`}>
                {`${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}`}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnderecoCEP;
