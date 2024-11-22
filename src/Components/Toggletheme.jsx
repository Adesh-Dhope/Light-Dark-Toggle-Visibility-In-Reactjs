import React, { useState } from "react";
import "./Toggletheme.css";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h1 className="title">Theme Toggle</h1>
      <p className="description">
        Click the button below to switch between Light and Dark modes.
      </p>
      <button className="toggle-button" onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default ToggleTheme;
