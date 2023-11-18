// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import TwoByTwoComponent from "./NavbarButton";

export default function Navbar({
  toggleNestedDropdown,
  selectedItem1,
  selectedItem2,
  handleItemClick1,
  handleItemClick2,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={() => toggleDropdown()}>
          Display <span className={`arrow down`}></span>
        </button>
        {dropdownOpen && (
          <ul className="navbar-dropdown">
            <li
              className="navbar-dropdown-item"
              onClick={() => toggleNestedDropdown()}
            >
              <TwoByTwoComponent
                toggleDropdown={toggleDropdown}
                selectedItem1={selectedItem1}
                selectedItem2={selectedItem2}
                handleItemClick1={handleItemClick1}
                handleItemClick2={handleItemClick2}
              />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
