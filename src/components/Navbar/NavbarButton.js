// TwoByTwoComponent.js
import React, { useState, useRef, useEffect } from "react";
import "./NavbarButton.css";

const TwoByTwoComponent = ({ closeCallback }) => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [selectedItem1, setSelectedItem1] = useState("Status");
  const [selectedItem2, setSelectedItem2] = useState("Priority");
  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  const handleItemClick1 = (item) => {
    setSelectedItem1(item);
    setDropdown1Open(false);
  };

  const handleItemClick2 = (item) => {
    setSelectedItem2(item);
    setDropdown2Open(false);
  };

  return (
    <div className="two-by-two-container">
      <div className="row">
        <div className="column">
          <p>Grouping</p>
        </div>
        <div className="column">
          <button className="dropdown-button" onClick={toggleDropdown1}>
            {selectedItem1}{" "}
            <span className={`arrow ${dropdown1Open ? "up" : "down"}`}></span>
          </button>
          {dropdown1Open && (
            <ul className="dropdown" ref={dropdown1Ref}>
              <li onClick={() => handleItemClick1("Status")}>Status</li>
              <li onClick={() => handleItemClick1("User")}>User</li>
              <li onClick={() => handleItemClick1("Priority")}>Priority</li>
            </ul>
          )}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <p>Ordering</p>
        </div>
        <div className="column">
          <button className="dropdown-button" onClick={toggleDropdown2}>
            {selectedItem2}
            <span className={`arrow down`}></span>
          </button>
          {dropdown2Open && (
            <ul className="dropdown" ref={dropdown2Ref}>
              <li onClick={() => handleItemClick2("Priority")}>Priority</li>
              <li onClick={() => handleItemClick2("Title")}>Title</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoByTwoComponent;
