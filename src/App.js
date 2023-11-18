import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  const [selectedItem1, setSelectedItem1] = useState("Status");
  const [selectedItem2, setSelectedItem2] = useState("Select");

  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);

  const toggleNestedDropdown = () => {
    setNestedDropdownOpen(!nestedDropdownOpen);
  };

  const handleItemClick1 = (item) => {
    setSelectedItem1(item);
    setSelectedItem2("Select");
  };

  const handleItemClick2 = (item) => {
    setSelectedItem2(item);
    setSelectedItem1("Select");
  };

  return (
    <div>
      <Navbar
        toggleNestedDropdown={toggleNestedDropdown}
        selectedItem1={selectedItem1}
        selectedItem2={selectedItem2}
        handleItemClick1={handleItemClick1}
        handleItemClick2={handleItemClick2}
      />
    </div>
  );
}

export default App;
