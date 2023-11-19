// Navbar.js
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import NavBarButton from "./NavbarButton";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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

  const closeDropdown = (event) => {
    if (!event.target.closest(".navbar-container")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={() => toggleDropdown()}>
          <div className="navbar-tune">
            <TuneIcon />
          </div>
          <div className="navbar-display-button">Display</div>
          <div className="navbar-arrow-drop-down">
            <ArrowDropDownIcon />
          </div>
        </button>
        {dropdownOpen && (
          <ul className="navbar-dropdown">
            <li
              className="navbar-dropdown-item"
              onClick={() => toggleNestedDropdown()}
            >
              <NavBarButton
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
