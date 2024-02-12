import React from 'react';

const TextArea = ({ label, name, value, onChange }) => {
  return (
    <div className='form-group'>
      <label className='form-label'>{label}</label>
      <textarea className='form-control' 
      rows={4}
      name={name}
      value={value}
      onChange={onChange} />
    </div>
  );
};

export default TextArea;
