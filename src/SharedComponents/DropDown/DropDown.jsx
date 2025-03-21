import React from "react";
import "./DropDown.css";

const DropDown = ({
  label,
  options = [],
  name,
  value,
  onChange,
  placeholder = "Select an option",
  error = "",
  className = "",
}) => {
  return (
    <div className={`dropdown-container ${className}`}>
      {label && <label className="dropdown-label">{label}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`dropdown-select ${error ? "dropdown-error" : ""}`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="dropdown-error-message">{error}</span>}
    </div>
  );
};

export default DropDown;
