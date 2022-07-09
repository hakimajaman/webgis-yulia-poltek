import "../../assets/styles/global.scss";
import React, { useState } from "react";

const Dropdown = ({ children }) => {
  const [dropdown, setDropdown] = useState(true);

  return (
    <div className="dropdown">
      {/* dropdown button */}
      <button onClick={() => setDropdown(!dropdown)}>
        <div className="icon-koridor">KOR 1</div>
        <p>Sekupang - Batam Center</p>
        <span>►</span>
      </button>

      {/* dropdown content */}
      <div
        className={`dropdown_content ${
          dropdown ? "dropdown_content-open" : "dropdown_content-closed"
        }`}
      >
        {dropdown ? children : <></>}
      </div>
    </div>
  );
};

export default Dropdown;
