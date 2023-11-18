import React from "react";
import "./Card.css";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import PendingIcon from "@mui/icons-material/Pending";

const StatusIcon = ({ status }) => {
  let icon;

  switch (status) {
    case "Todo":
      icon = <RadioButtonUncheckedIcon fontSize="small" />; // Unchecked circle icon
      break;
    case "Done":
      icon = <CheckCircleIcon fontSize="small" />; // Checked circle icon
      break;
    case "In progress":
      icon = <PendingIcon fontSize="small" />; // Dotted circle icon
      break;
    case "Backlog":
      icon = <DoNotDisturbIcon fontSize="small" />; // Do not disturb icon
      break;
    default:
      icon = null;
  }

  return <div className="status-icon">{icon}</div>;
};

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
  const getRandomDarkColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getAbbreviation = (name) => {
    const initials = name.split(" ").map((word) => word[0]);
    return initials.join("").toUpperCase();
  };

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
        <StatusIcon status={status} />
        <p>{title}</p>
      </div>
      <div className="footer">
        <p>{tag[0]}</p>
      </div>
    </div>
  );
};

export default Card;
