import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const TextArea = ({ label, name, value, onChange, required, error }) => {
  return (
    <div className={`form-group ${error ? "has-error" : ""}`}>
      <label
        className={`form-label ${
          error ? "error-input form-control__label" : ""
        }`}
      >
        {label}
      </label>
      <textarea
        className={`form-control ${
          error ? "error-input form-control--error" : ""
        }`}
        rows={4}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && (
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

export default TextArea;
