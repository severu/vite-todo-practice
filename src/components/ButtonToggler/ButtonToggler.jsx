import React from "react";
import "./ButtonToggler.modules.scss";

function ButtonToggler({ isDarkMode, toggleTheme }) {
  return (
    <label className="switch">
      <input type="checkbox" onChange={toggleTheme} />
      <span className="switch__slider round"></span>
    </label>
  );
}

export default ButtonToggler;
