// SelectAddress.jsx

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AddressSearch = ({ onAddressSelected, error }) => {
  const [cep, setCep] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [invalidCep, setInvalidCep] = useState(false);
  const [searching, setSearching] = useState(false); // Add searching state

  const handleCepChange = (e) => {
    const { value } = e.target;
    setCep(value);
  };

  const searchAddress = async () => {
    try {
      setSearching(true); // Set searching state to true
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { data } = response;

      if (!data.erro) {
        setAddresses([data]);
        setSelectedAddress(null);
        setInvalidCep(false); // Reset invalid ZIP code state
      } else {
        console.error("CEP not found");
        setAddresses([]);
        setSelectedAddress(null);
        setInvalidCep(true); // Set invalid ZIP code state
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setInvalidCep(true); // Set invalid ZIP code state
    } finally {
      setSearching(false); // Reset searching state after search is completed
    }
  };

  const handleAddressSelected = (address) => {
    setSelectedAddress(address);
    onAddressSelected(address);
  };

  return (
    <div className={`form-group ${error || invalidCep ? "has-error" : ""}`}>
      <label
        className={`form-label ${
          error ? "error-input form-control__label" : ""
        }`}
      >
        CEP*
      </label>
      <div className="form-search">
        <input
          className={`form-control ${
            error || invalidCep ? "error-input form-control--error" : ""
          }`}
          type="text"
          value={cep}
          onChange={handleCepChange}
          inputMode="numeric"
          pattern="[0-9]*"
        />
        <button
          className="search-button"
          onClick={searchAddress}
          disabled={searching}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {/* Display error message if ZIP code is invalid */}
      {invalidCep && (
        <div className="form-control__error-bottom">
          <span className="form-control__error-icon">
            <FontAwesomeIcon icon={faExclamationCircle} />
          </span>
          <span className="error-message">CEP é inválido</span>
        </div>
      )}
      {addresses.length > 0 && (
        <div className="form-address-check">
          <label className="form-label">Selecione um endereço:</label>
          {addresses.map((address, index) => (
            <div key={address.cep}>
              <input
                className="form-check-input"
                type="radio"
                id={`address-${index}`}
                name="address"
                value={address.logradouro}
                checked={address === selectedAddress}
                onChange={() => handleAddressSelected(address)}
              />
              <label className="input-check-label" htmlFor={`address-${index}`}>
                {`${address.logradouro}, ${address.bairro}, ${address.localidade} - ${address.uf}`}
              </label>
            </div>
          ))}
        </div>
      )}
      {error && !searching && (
        <div className="form-control__error-bottom">
          <span className="form-control__error-icon">
            <FontAwesomeIcon icon={faExclamationCircle} />
          </span>
          <span className="form-control__error-message">Campo obrigatório</span>
        </div>
      )}{" "}
    </div>
  );
};

export default AddressSearch;
