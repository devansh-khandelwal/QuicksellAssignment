import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  const [selectedItem1, setSelectedItem1] = useState("Status");
  const [selectedItem2, setSelectedItem2] = useState("Priority");

  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);

  const toggleNestedDropdown = () => {
    setNestedDropdownOpen(!nestedDropdownOpen);
  };

  const handleItemClick1 = (item) => {
    setSelectedItem1(item);
  };

  const handleItemClick2 = (item) => {
    setSelectedItem2(item);
  };

  return (
    <div>
      {/* <Navbar
        toggleNestedDropdown={toggleNestedDropdown}
        selectedItem1={selectedItem1}
        selectedItem2={selectedItem2}
        handleItemClick1={handleItemClick1}
        handleItemClick2={handleItemClick2}
      /> */}
      <Card
        id="CAM-1"
        title="Update User Profile Page UI"
        tag={["Feature request"]}
        userId="usr-1"
        status="Todo"
        priority={4}
        name="Suresh Gupta"
        availability={true}
      />
    </div>
  );
}

export default App;
