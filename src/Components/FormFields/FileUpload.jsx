import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faDownload,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];

const FileUpload = ({ label, onChange, error }) => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [fileUploadError, setFileUploadError] = useState(false); // New state to track file upload error

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    let newFiles = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];

      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        continue;
      }

      if (file.size > MAX_FILE_SIZE) {
        continue;
      }

      newFiles.push(file);
    }

    setFiles(newFiles);
    onChange(newFiles);
    setFileUploadError(false); // Reset the error when files are added
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onChange(newFiles);
    if (newFiles.length === 0) {
      setFileUploadError(true); // Set file upload error if no files are present
    } else {
      setFileUploadError(false); // Reset the error when files are removed
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files.length === 0) {
      setFileUploadError(true); // Set file upload error if no files are present
      return;
    }
    // Rest of the form submission logic
  };

  return (
    <div className={`form-group ${error || fileUploadError ? "has-error" : ""}`}>
      <label
        className={`form-label ${
          error || fileUploadError ? "error-input form-control__label" : ""
        }`}
      >
        {label}
      </label>
      <div
        className={`file-upload-container ${
          error || fileUploadError ? "error-input form-control--error" : ""
        }`}
      >
        <div className="file-upload__message">
          <p className="file-upload__message-title"><FontAwesomeIcon className="upload-icon" icon={faDownload} /> Faça upload dos arquivos aqui</p>
          <p className="file-upload__message-text">Tipos de arquivos aceitos: JPG, PNG e PDF</p>
        </div>

        <div className="file-upload__button">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".jpg, .jpeg, .png, .pdf"
            multiple
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <button type="button" onClick={handleButtonClick}>
            Selecionar Arquivos
          </button>
        </div>
      </div>
      {files.length > 0 && (
        <div className="files-uploaded">
          <p>Arquivos selecionados:</p>

          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name}
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {(error || fileUploadError) && (
        <div className="form-control__error-bottom">
          <span className="form-control__error-icon">
            <FontAwesomeIcon icon={faExclamationCircle} />
          </span>
          <span className="form-control__error-message">Campo obrigatório</span>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
