import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SelectInput = ({ id, label, value, onChange, icon, options, required = false }) => (
  <div className="form-floating mb-3 d-flex align-items-center">
    <FontAwesomeIcon icon={icon} className="me-2 mb-4" />
    <div className="border-start pe-2">
      <select
        className="form-select custom-input"
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor={id}>{label}</label>
    </div>
  </div>
);

export default SelectInput;
