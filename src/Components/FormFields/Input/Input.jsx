// Input.jsx
import React from 'react';

const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div className='form-group'>
      <label className='form-label'>{label}</label>
      <input 
        className='form-control' 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange}
      />
    </div>
  );
};

export default Input;