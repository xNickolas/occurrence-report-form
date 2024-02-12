import React, { useState } from "react";
import "../Form/Form.css";
import { useOccurrenceContext } from "../../Contexts/OccurrenceContext";
import Input from "../FormFields/Input";
import TextArea from "../FormFields/TextArea";
import Select from "../FormFields/SelectAddress";
import FileUpload from "../FormFields/FileUpload";

const Form = () => {
  const { addOccurrence } = useOccurrenceContext();

  const [formData, setFormData] = useState({
    nomeRelator: "",
    tituloOcorrencia: "",
    descricaoOcorrencia: "",
    enderecoOcorrencia: null, // Adicione o estado para o endereço selecionado
    centroDistribuicao: "",
    evidencias: null,
    dataOcorrencia: "",
    dataEncerramento: "",
    observacao: "",
  });
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  // Handlers para atualizar o estado do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "descricaoOcorrencia") {
      setDescriptionError(value.length < 5);
    }
  };

  const handleEnderecoSelecionado = (endereco) => {
    setFormData((prevState) => ({
      ...prevState,
      enderecoOcorrencia: endereco,
    }));
  };

  const handleFileChange = (file) => {
    setFormData((prevState) => ({
      ...prevState,
      evidencias: file, // Atualize o estado com o arquivo selecionado
    }));
    setFileUploaded(true);
  };

  // Submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com a submissão do formulário
    if (
      formData.nomeRelator &&
      formData.tituloOcorrencia &&
      formData.descricaoOcorrencia &&
      formData.enderecoOcorrencia &&
      formData.dataOcorrencia &&
      fileUploaded
    ) {
      // Realize a submissão do formulário
      console.log("Formulário submetido com sucesso:", formData);
      addOccurrence(formData); // Adicionar a ocorrência ao contexto global
      setShowErrorMessage(false); // Resetar o estado de exibição do erro
      setFormSubmitted(true); // Atualizar o estado para indicar que o formulário foi enviado com sucesso
    } else {
      setShowErrorMessage(true);
    }
  };

  // Função para lidar com o retorno ao formulário
  const handleReturnToForm = () => {
    setFormSubmitted(false); // Resetar o estado de submissão do formulário
    setFormData({
      // Limpar os campos do formulário
      nomeRelator: "",
      tituloOcorrencia: "",
      descricaoOcorrencia: "",
      enderecoOcorrencia: null,
      centroDistribuicao: "",
      evidencias: null,
      dataOcorrencia: "",
      dataEncerramento: "",
      observacao: "",
    });
    setFileUploaded(false); // Resetar o estado de carregamento do arquivo
  };

  return (
    <>
      {!formSubmitted && (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <Input
                label="Nome do Relator*"
                type="text"
                name="nomeRelator"
                value={formData.nomeRelator}
                onChange={handleChange}
                required
              />
              <Input
                label="Título da Ocorrência*"
                type="text"
                name="tituloOcorrencia"
                value={formData.tituloOcorrencia}
                onChange={handleChange}
                required
              />

              <Select onEnderecoSelecionado={handleEnderecoSelecionado} />

              <Input
                label="Data da Ocorrência*"
                type="date"
                name="dataOcorrencia"
                value={formData.dataOcorrencia}
                onChange={handleChange}
              />
              <Input
                label="Data de Encerramento da Ocorrência"
                type="date"
                name="dataEncerramento"
                value={formData.dataEncerramento}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6">
              <TextArea
                label="Descrição da Ocorrência*"
                name="descricaoOcorrencia"
                value={formData.descricaoOcorrencia}
                onChange={handleChange}
              />
              {descriptionError && (
                <p className="error-message">
                  A descrição deve ter no mínimo 5 caracteres.
                </p>
              )}

              <TextArea
                label="Observação da Ocorrência"
                name="observacaoOcorrencia"
                value={formData.observacaoOcorrencia}
                onChange={handleChange}
              />

              <FileUpload
                label="Upload de Evidências*"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
          {showErrorMessage && (
            <div>
              <p className="error-message">
                Por favor, preencha todos os campos do formulário.
              </p>
            </div>
          )}

          <button className="button-primary submit-button" type="submit">
            Enviar
          </button>
        </form>
      )}
      {formSubmitted && (
        <div>
          <p className="success-message">Formulário enviado com sucesso!</p>
          <button className="button-primary" onClick={handleReturnToForm}>
            Adicionar outra ocorrência
          </button>
        </div>
      )}
    </>
  );
};

export default Form;
