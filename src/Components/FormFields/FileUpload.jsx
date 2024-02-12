import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 10 MB

const FileUpload = ({ label, onChange }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    let newFiles = [];
    let newError = '';

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (file.size <= MAX_FILE_SIZE) {
        newFiles.push(file);
      } else {
        newError = `O arquivo ${file.name} excede o limite de tamanho de ${MAX_FILE_SIZE / (1024 * 1024)} MB.`;
      }
    }

    setFiles(newFiles);
    onChange(newFiles);
    setError(newError);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onChange(newFiles);
  };

  return (
    <div className='form-group'>
      <label className='form-label'>{label}</label>
      <div className="custom-file-upload">
        <input type="file" onChange={handleFileChange} accept=".jpg, .jpeg, .png, .pdf" multiple ref={fileInputRef} style={{ display: 'none' }} />
        <button onClick={handleButtonClick}>Selecionar Arquivos</button>
      </div>
      {files.length > 0 && (
        <div className='files-uploaded'>
          <p>Arquivos selecionados:</p>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name}
                <button onClick={() => handleRemoveFile(index)}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}
    </div>
  );
};

export default FileUpload;
