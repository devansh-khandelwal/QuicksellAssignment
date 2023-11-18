import React from "react";
import "./Card.css";

const Card = ({
  id,
  title,
  profileIcon,
  tag,
  userId,
  status,
  priority,
  name,
  availability,
}) => {
  // Function to generate a random dark color
  const getRandomDarkColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Function to get the abbreviation from the name
  const getAbbreviation = (name) => {
    const initials = name.split(" ").map((word) => word[0]);
    return initials.join("").toUpperCase();
  };

  // Determine the background color for the profile icon
  const backgroundColor = getRandomDarkColor();

  return (
    <div className="card">
      <div className="header">
        <h2>{id}</h2>
        <div className="profile-container">
          <div className="profile-icon" style={{ backgroundColor }}>
            <div className="initials">
              {getAbbreviation(name)}
              <div
                className={`availability-indicator ${
                  availability ? "available" : "not-available"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p>{title}</p>
      </div>
      <div className="footer">
        <p>{tag[0]}</p>
      </div>
    </div>
  );
};

export default Card;
