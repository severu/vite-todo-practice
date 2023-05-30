import React from "react";
import "./ButtonToggler.modules.scss";

function ButtonToggler({ isDarkMode, toggleTheme }) {
  return (
    <label className="switch">
      <input type="checkbox" onChange={toggleTheme} checked={ isDarkMode ? "checked" : "" }/>
      <span className="switch__slider round"></span>
    </label>
  );
}

export default ButtonToggler;
