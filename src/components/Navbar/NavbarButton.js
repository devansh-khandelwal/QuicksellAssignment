// NavbarButton.js
import React, { useRef, useState, useEffect } from "react";
import "./NavbarButton.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function NavbarButton({
  toggleDropdown,
  selectedItem1,
  selectedItem2,
  handleItemClick1,
  handleItemClick2,
}) {
  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);

  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  const onClick1 = (item) => {
    handleItemClick1(item);
    setDropdown1Open(false);
  };

  const onClick2 = (item) => {
    handleItemClick2(item);
    setDropdown2Open(false);
  };

  const closeDropdowns = (event) => {
    if (
      dropdown1Ref.current &&
      !dropdown1Ref.current.contains(event.target) &&
      dropdown2Ref.current &&
      !dropdown2Ref.current.contains(event.target)
    ) {
      setDropdown1Open(false);
      setDropdown2Open(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdowns);
    return () => {
      document.removeEventListener("click", closeDropdowns);
    };
  }, []);

  return (
    <div className="NavbarButton">
      <div className="NavbarButton-row">
        <div className="NavbarButton-column">
          <p>Grouping</p>
        </div>
        <div className="NavbarButton-column">
          <button
            className="NavbarButton-dropdown-button"
            onClick={() => toggleDropdown1()}
          >
            {selectedItem1}
            <div className="NavbarButton-arrowDropdown-icon">
              <ArrowDropDownIcon />
            </div>
          </button>
          {dropdown1Open && (
            <ul className="NavbarButton-dropdown" ref={dropdown1Ref}>
              <li onClick={() => onClick1("Status")}>Status</li>
              <li onClick={() => onClick1("User")}>User</li>
              <li onClick={() => onClick1("Priority")}>Priority</li>
            </ul>
          )}
        </div>
      </div>
      <div className="NavbarButton-row">
        <div className="NavbarButton-column">
          <p>Ordering</p>
        </div>
        <div className="NavbarButton-column">
          <button
            className="NavbarButton-dropdown-button"
            onClick={() => toggleDropdown2()}
          >
            {selectedItem2}
            <div className="NavbarButton-arrowDropdown-icon">
              <ArrowDropDownIcon />
            </div>
          </button>
          {dropdown2Open && (
            <ul className="NavbarButton-dropdown" ref={dropdown2Ref}>
              <li onClick={() => onClick2("Priority")}>Priority</li>
              <li onClick={() => onClick2("Title")}>Title</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
