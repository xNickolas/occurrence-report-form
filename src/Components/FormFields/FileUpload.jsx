import React, { useState } from 'react';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const FileUpload = ({ label, onChange }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= MAX_FILE_SIZE) {
      setFile(selectedFile);
      onChange(selectedFile);
      setError('');
    } else {
      setFile(null);
      onChange(null);
      setError(`O arquivo selecionado excede o limite de tamanho de ${MAX_FILE_SIZE / (1024 * 1024)} MB.`);
    }
  };

  return (
    <div className='form-group'>
      <label>{label}</label>
      <input type="file" onChange={handleFileChange} accept=".jpg, .jpeg, .png, .pdf" />
      {file && (
        <div>
          <p>Arquivo selecionado: {file.name}</p>
        </div>
      )}
      {error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}
    </div>
  );
};

export default FileUpload;
