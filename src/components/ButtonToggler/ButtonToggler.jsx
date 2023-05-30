import React from "react";
import "./ButtonToggler.modules.scss";

function ButtonToggler({ isDarkMode, toggleTheme }) {
  return (
    <div className="button-container">
      <label className="button-container__switch">
        <input
          className="button-container__switch__checkbox"
          type="checkbox"
          onChange={() => toggleTheme()}
        />
        <span className="button-container__switch__checkbox__slider-round"></span>
      </label>

      {/*<button className="button-container__button" onClick={() => toggleTheme()}>Toggle</button>*/}
    </div>
  );
}

export default ButtonToggler;
