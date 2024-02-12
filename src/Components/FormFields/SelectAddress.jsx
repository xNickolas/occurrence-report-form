import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AddressSearch = ({ onAddressSelected }) => {
  const [cep, setCep] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleCepChange = (e) => {
    const { value } = e.target;
    setCep(value);
  };

  const searchAddress = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { data } = response;

      if (!data.erro) {
        setAddresses([data]);
        setSelectedAddress(null);
      } else {
        console.error("CEP not found");
        setAddresses([]);
        setSelectedAddress(null);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handleAddressSelected = (address) => {
    setSelectedAddress(address);
    onAddressSelected(address);
  };

  return (
    <div className="form-group">
      <label className="form-label">CEP*</label>
      <div className="form-search">
        <input
          className="form-control"
          type="text"
          value={cep}
          onChange={handleCepChange}
        />
        <button className="search-button" onClick={searchAddress}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

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
    </div>
  );
};

export default AddressSearch;