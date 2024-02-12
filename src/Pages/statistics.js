import React, { useState } from "react";
import Modal from "react-modal";
import "./Pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useOccurrenceContext } from "../contexts/OccurrenceContext";

const Statistics = () => {
  const { occurrences } = useOccurrenceContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOccurrence, setSelectedOccurrence] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (occurrence) => {
    setSelectedOccurrence(occurrence);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOccurrence(null);
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section>
      <div className="container">
        <div>
          <h1>Lista de Ocorrências em Centros de Distribuição</h1>
          <p>
            Aqui você encontrará uma lista completa e detalhada das ocorrências
            registradas em nossos centros de distribuição.
            <br /> Utilize esta lista para consultar os detalhes específicos de
            cada evento
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {occurrences.map((occurrence, index) => (
              <div key={index} className="occurrence-card border-top-thin">
                <div>
                  <h3>{occurrence.rapporteurName}</h3>
                  <span><span className="modal-span">{occurrence.occurrenceTitle}</span> | </span>
                  <span>{occurrence.occurrenceDate}</span>
                </div>
                <div>
                  <button
                    className="card-button"
                    onClick={() => openModal(occurrence)}
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Detalhes da Ocorrência"
          className="modal" 
          overlayClassName="overlay"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            {" "}
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detalhes da Ocorrência</h5>
                <button onClick={closeModal}>
                  <FontAwesomeIcon className="close-button" icon={faTimes} />
                </button>
              </div>
              <div className="modal-body">
                {selectedOccurrence && (
                  <div>
                    <p>
                      <span className="modal-span">Nome do relator:</span> {selectedOccurrence.rapporteurName}
                    </p>
                    <p>
                      <span className="modal-span">Título da Ocorrência:</span> {selectedOccurrence.occurrenceTitle}
                    </p>
                    <p>
                      <span className="modal-span">Endereço:</span> {" "}
                      {selectedOccurrence.occurrenceAddress && (
                        <>
                          {`${selectedOccurrence.occurrenceAddress.logradouro}, ${selectedOccurrence.occurrenceAddress.bairro}, ${selectedOccurrence.occurrenceAddress.localidade} - ${selectedOccurrence.occurrenceAddress.uf}`} -{" "}
                          {selectedOccurrence.occurrenceAddress.cep}
                        </>
                      )}
                    </p>
                    <p>
                      <span className="modal-span">Data da Ocorrência:</span> {selectedOccurrence.occurrenceDate}
                    </p>
                    <p>
                      <span className="modal-span">Data de Encerramento da Ocorrência:</span> {" "} {selectedOccurrence.closingDate}
                    </p>
                    <p>
                      <span className="modal-span">Descrição da Ocorrência:</span> {" "} {selectedOccurrence.occurrenceDescription}
                    </p>
                    <p>
                      <span className="modal-span">Observação da Ocorrência:</span> {selectedOccurrence.observation}
                    </p>
                    <p>
                      <span className="modal-span">Evidências:</span>
                    </p>
                    <div className="image-container">
                      {selectedOccurrence.evidence &&
                        selectedOccurrence.evidence.map((evidence, index) => (
                          // <img
                          //   key={index}
                          //   src={URL.createObjectURL(evidence)}
                          //   alt={`Evidência ${index + 1}`}
                          //   onClick={() => openImageModal(evidence)}
                          // />
                          <a
                            key={index}
                            // href={URL.createObjectURL(evidence)}
                            className="evidence-link"
                            onClick={() => openImageModal(evidence)}
                          >
                            Evidência {index + 1},
                          </a>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={selectedImage !== null}
          onRequestClose={closeImageModal}
          contentLabel="Zoom na Imagem"
          className="mfp-wrap"
          overlayClassName="overlay"
        >
          <div className="mfp-container">
            <div className="mfp-content">
              <button onClick={closeImageModal} className="mfp-close">
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <div className="mfp-figure">
                <figure>
                  {selectedImage && (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Imagem Ampliada"
                      className="zoomed-image"
                    />
                  )}
                </figure>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Statistics;
