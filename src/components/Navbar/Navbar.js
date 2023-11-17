// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import TwoByTwoComponent from "./NavbarButton";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNestedDropdown = () => {
    setNestedDropdownOpen(!nestedDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={toggleDropdown}>
          Display <span className={`arrow down`}></span>
        </button>
        {dropdownOpen && (
          <ul className="navbar-dropdown">
            <li className="navbar-dropdown-item" onClick={toggleNestedDropdown}>
              <TwoByTwoComponent />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
