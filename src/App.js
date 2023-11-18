import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import GroupByPriority from "./pages/GroupByPriority/GroupByPriority";
import GroupByStatus from "./pages/GroupByStatus/GroupByStatus";
import GroupByUser from "./pages/GroupByUser/GroupByUser";

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

  let Component;

  if (selectedItem1 === "User") {
    Component = GroupByUser;
  }

  if (selectedItem1 === "Priority") {
    Component = GroupByPriority;
  }

  if (selectedItem1 === "Status") {
    Component = GroupByStatus;
  }

  return (
    <div>
      <Navbar
        toggleNestedDropdown={toggleNestedDropdown}
        selectedItem1={selectedItem1}
        selectedItem2={selectedItem2}
        handleItemClick1={handleItemClick1}
        handleItemClick2={handleItemClick2}
      />
      <Component selectedItem2={selectedItem2} />
    </div>
  );
}

export default App;
