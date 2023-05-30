import React from "react";
import "./ButtonToggler.modules.scss";

function ButtonToggler({ isDarkMode, toggleTheme }) {
  return (
    <div className="button-container">
      
      <button className="button-container__button" onClick={() => toggleTheme()}>Toggle</button>
    </div>
  );
}

export default ButtonToggler;
