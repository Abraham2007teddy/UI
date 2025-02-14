import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TextInput = ({ id, label, value, onChange, icon, required, rows = 1, style = {} }) => (
  <div className="form-floating mb-3 d-flex align-items-center">
    {icon && <FontAwesomeIcon icon={icon} className="me-2 mb-4" />}
    <div className="border-start pe-2 w-100">
      {rows > 1 ? (
        <textarea
          id={id}
          className="form-control custom-input"
          placeholder={label}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          style={{
            resize: 'none',
            width: '100%',
            minHeight: '120px', // Ensure a minimum height for bigger size
            ...style, // Allow additional custom styles
          }}
        />
      ) : (
        <input
          type="text"
          id={id}
          className="form-control custom-input"
          placeholder={label}
          value={value}
          onChange={onChange}
          required={required}
          style={{
            width: '100%',
            ...style, // Allow additional custom styles
          }}
        />
      )}
      <label htmlFor={id}>{label}</label>
    </div>
  </div>
);



export default TextInput;
