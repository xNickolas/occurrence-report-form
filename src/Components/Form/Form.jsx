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
  const [fileUploaded, setFileUploaded] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  // Handlers to update the form state
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

  const handleFileChange = (file) => {
    setFormData((prevState) => ({
      ...prevState,
      evidence: file,
    }));
    setFileUploaded(true);
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrorMessage(false);
    if (
      formData.rapporteurName &&
      formData.occurrenceTitle &&
      formData.occurrenceDescription &&
      formData.occurrenceAddress &&
      formData.occurrenceDate &&
      fileUploaded
    ) {
      console.log("Form submitted successfully:", formData);
      addOccurrence(formData);
      setFormSubmitted(true);
    } else {
      setShowErrorMessage(true);
    }
  };

  // Handle returning to the form
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
    setFileUploaded(false);
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
              />
              <Input
                label="Título da Ocorrência*"
                type="text"
                name="occurrenceTitle"
                value={formData.occurrenceTitle}
                onChange={handleChange}
                required
              />

              <Select onAddressSelected={handleAddressSelected} />

              <Input
                label="Data da Ocorrência*"
                type="date"
                name="occurrenceDate"
                value={formData.occurrenceDate}
                onChange={handleChange}
              />
              <Input
                label="Data de Encerramento da Ocorrência"
                type="date"
                name="closingDate"
                value={formData.closingDate}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6">
              <TextArea
                label="Descrição da Ocorrência*"
                name="occurrenceDescription"
                value={formData.occurrenceDescription}
                onChange={handleChange}
              />
              {descriptionError && (
                <p className="error-message">
                  A descrição deve ter no mínimo 5 caracteres.
                </p>
              )}

              <TextArea
                label="Observação da Ocorrência"
                name="observation"
                value={formData.observation}
                onChange={handleChange}
              />

              <FileUpload
                label="Upload de Evidências* (JPG, PNG e PDF)"
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
