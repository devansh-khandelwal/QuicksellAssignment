// NavbarButton.js
import React, { useRef, useState } from "react";
import "./NavbarButton.css";

export default function TwoByTwoComponent({
  closeCallback,
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
    toggleDropdown();
  };

  const onClick2 = (item) => {
    handleItemClick2(item);
    setDropdown2Open(false);
    toggleDropdown();
  };

  return (
    <div className="two-by-two-container">
      <div className="row">
        <div className="column">
          <p>Grouping</p>
        </div>
        <div className="column">
          <button className="dropdown-button" onClick={() => toggleDropdown1()}>
            {selectedItem1}
            <span className={`arrow down`}></span>
          </button>
          {dropdown1Open && (
            <ul className="dropdown" ref={dropdown1Ref}>
              <li onClick={() => onClick1("Status")}>Status</li>
              <li onClick={() => onClick1("User")}>User</li>
              <li onClick={() => onClick1("Priority")}>Priority</li>
            </ul>
          )}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <p>Ordering</p>
        </div>
        <div className="column">
          <button className="dropdown-button" onClick={() => toggleDropdown2()}>
            {selectedItem2}
            <span className={`arrow down`}></span>
          </button>
          {dropdown2Open && (
            <ul className="dropdown" ref={dropdown2Ref}>
              <li onClick={() => onClick2("Priority")}>Priority</li>
              <li onClick={() => onClick2("Title")}>Title</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
