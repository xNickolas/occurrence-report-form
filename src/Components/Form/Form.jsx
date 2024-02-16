import React, { useState } from "react";
import "../Form/Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useOccurrenceContext } from "../../contexts/OccurrenceContext";
import Input from "../FormFields/Input/Input";
import TextArea from "../FormFields/TextArea";
import SelectAddress from "../FormFields/SelectAddress";
import FileUpload from "../FormFields/FileUpload";

const Form = () => {
  const { addOccurrence } = useOccurrenceContext();

  const [formData, setFormData] = useState({
    rapporteurName: "",
    occurrenceTitle: "",
    occurrenceDescription: "",
    occurrenceAddress: null,
    distributionCenter: "",
    evidence: null,
    occurrenceDate: "",
    closingDate: "",
    observation: "",
  });
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  // Handlers para atualizar o estado do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "occurrenceDescription") {
      setDescriptionError(value.length < 5);
    }
  };

  const handleAddressSelected = (address) => {
    setFormData((prevState) => ({
      ...prevState,
      occurrenceAddress: address,
    }));
  };

  const handleFileChange = (files) => {
    setFormData((prevState) => ({
      ...prevState,
      evidence: files,
    }));
  };

  // Submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrorMessage(true);
    if (
      formData.rapporteurName &&
      formData.occurrenceTitle &&
      formData.occurrenceDescription &&
      formData.occurrenceAddress &&
      formData.occurrenceDate &&
      formData.evidence && // Check if evidence exists
      formData.evidence.length > 0 // Check if evidence array has at least one file
    ) {
      console.log("Formulário enviado com sucesso:", formData);
      addOccurrence(formData);
      setFormSubmitted(true);
      setShowErrorMessage(false);
    }
  };

  // Lidar com o retorno ao formulário
  const handleReturnToForm = () => {
    setFormSubmitted(false);
    setFormData({
      rapporteurName: "",
      occurrenceTitle: "",
      occurrenceDescription: "",
      occurrenceAddress: null,
      distributionCenter: "",
      evidence: null,
      occurrenceDate: "",
      closingDate: "",
      observation: "",
    });
  };

  return (
    <>
      {!formSubmitted && (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <Input
                label="Nome do relator*"
                type="text"
                name="rapporteurName"
                value={formData.rapporteurName}
                onChange={handleChange}
                required
                error={showErrorMessage && !formData.rapporteurName}
              />
            </div>
            <div className="col-lg-6">
              <Input
                label="Título da Ocorrência*"
                type="text"
                name="occurrenceTitle"
                value={formData.occurrenceTitle}
                onChange={handleChange}
                required
                error={showErrorMessage && !formData.occurrenceTitle}
              />
            </div>
            <div className="col-lg-6">
              <SelectAddress
                onAddressSelected={handleAddressSelected}
                error={showErrorMessage && !formData.occurrenceAddress}
              />
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <Input
                    label="Data da Ocorrência*"
                    type="date"
                    name="occurrenceDate"
                    value={formData.occurrenceDate}
                    onChange={handleChange}
                    required
                    error={showErrorMessage && !formData.occurrenceDate}
                  />
                </div>
                <div className="col-lg-6">
                  <Input
                    label="Encerramento da Ocorrência"
                    type="date"
                    name="closingDate"
                    value={formData.closingDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 text__area-description">
              <TextArea
                label="Descrição da Ocorrência*"
                name="occurrenceDescription"
                value={formData.occurrenceDescription}
                onChange={handleChange}
                required
                error={showErrorMessage && !formData.occurrenceDescription}
              />
              {descriptionError && (
                <div className="form-control__error-bottom">
                  <span className="form-control__error-icon">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  </span>
                  <span className="error-message">
                    A descrição deve ter no mínimo 5 caracteres
                  </span>
                </div>
              )}
            </div>
            <div className="col-lg-6">
              <TextArea
                label="Observação da Ocorrência"
                name="observation"
                value={formData.observation}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6">
              <FileUpload
                label="Upload de Evidências*"
                onChange={handleFileChange}
                error={showErrorMessage && !formData.evidence}
              />
            </div>
          </div>

          <button className="button-primary submit-button" type="submit">
            Enviar
          </button>
        </form>
      )}
      {formSubmitted && (
        <div className="form-end-message">
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
