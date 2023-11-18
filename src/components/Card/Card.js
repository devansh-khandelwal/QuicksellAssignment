import React from "react";
import "./Card.css"; // You can create a CSS file for styling

const Card = ({ heading, subheading, profileIcon, logo, bottomText }) => {
  return (
    <div className="card">
      <div className="header">
        <h2>{heading}</h2>
        <p>{subheading}</p>
        {profileIcon && (
          <img className="profile-icon" src={profileIcon} alt="Profile" />
        )}
      </div>
      <div className="footer">
        <img className="logo" src={logo} alt="Logo" />
        <p>{bottomText}</p>
      </div>
    </div>
  );
};

export default Card;
