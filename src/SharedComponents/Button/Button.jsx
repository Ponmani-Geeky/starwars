import React from "react";
import "./Button.css";

const Button = ({ children, onClick, type = "button", className = "" ,disabled}) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
