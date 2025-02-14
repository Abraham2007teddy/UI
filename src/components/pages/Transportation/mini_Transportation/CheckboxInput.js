import React from 'react';

const CheckboxInput = ({ id, label, checked, onChange, required = false }) => (
  <div className="form-check mb-3">
    <input
      type="checkbox"
      className="form-check-input"
      id={id}
      checked={checked}
      onChange={onChange}
      required={required}
    />
    <label className="form-check-label" htmlFor={id}>
      {label}
    </label>
  </div>
);

export default CheckboxInput;
