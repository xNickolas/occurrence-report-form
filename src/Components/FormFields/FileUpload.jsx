import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

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

      // Verify the file type
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        newError = `O tipo de arquivo ${file.name} não é permitido.`;
        continue;
      }

      // Verify file size
      if (file.size > MAX_FILE_SIZE) {
        newError = `O arquivo ${file.name} excede o limite de tamanho de ${MAX_FILE_SIZE / (1024 * 1024)} MB.`;
        continue;
      }

      newFiles.push(file);
    }

    setFiles(newFiles);
    onChange(newFiles);
    setError(newError);
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
  };

  return (
    <div className='form-group'>
      <label className='form-label'>{label}</label>
      <div className="custom-file-upload">
        <input
          type="file"
          onChange={handleFileChange}
          accept=".jpg, .jpeg, .png, .pdf"
          multiple
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <button type="button" onClick={handleButtonClick}>Selecionar Arquivos</button>
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
