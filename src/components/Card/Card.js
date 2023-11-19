import React from "react";
import "./Card.css";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const StatusIcon = ({ status }) => {
  let icon;

  switch (status) {
    case "Todo":
      icon = <RadioButtonUncheckedIcon color="action" />; // Unchecked circle icon
      break;
    case "Done":
      icon = <CheckCircleIcon color="primary" />; // Checked circle icon
      break;
    case "In progress":
      icon = <PendingOutlinedIcon color="action" />; // Dotted circle icon
      break;
    case "Backlog":
      icon = <BorderColorOutlinedIcon color="action" />; // Do not disturb icon
      break;
    case "Cancelled":
      icon = <CancelIcon color="action" />; // Unchecked circle icon
      break;
    default:
      icon = null;
  }

  return <div className="card-status-icon">{icon}</div>;
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
    if (!name) return ""; // Return an empty string if the name is undefined
    const initials = name.split(" ").map((word) => word[0]);
    return initials.join("").toUpperCase();
  };

  const backgroundColor = getRandomDarkColor();

  const maxTextLength = 55; // Set your desired maximum text length

  const truncatedText =
    title.length > maxTextLength
      ? title.slice(0, maxTextLength) + "..."
      : title;

  return (
    <div className="card">
      <div className="card-header-cover">
        <div className="card-header">
          {id}
          <div className="card-profile-container">
            {name && (
              <div className="card-profile-icon" style={{ backgroundColor }}>
                <div className="card-initials">{getAbbreviation(name)}</div>
              </div>
            )}
            <div
              className={`card-availability-indicator ${
                availability ? "available" : "not-available"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="card-container">
        {status && <StatusIcon status={status} />}
        {truncatedText}
      </div>
      <div className="card-footer">
        <div className="card-footer-icon">
          <MoreHorizIcon color="action" />
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <CircleIcon color="action" />
          </div>
          <div className="card-tag-text">{tag[0]}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
