import React from "react";
import "./GroupByUser.css";
import Card from "../../components/Card/Card";
import { tickets, users } from "../../data"; //

import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function GroupByUser({ selectedItem2 }) {
  const countTicketsByUser = (userId) => {
    return tickets.filter((ticket) => ticket.userId === userId).length;
  };

  const getRandomDarkColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getAbbreviation = (name) => {
    if (!name) return "";
    const initials = name.split(" ").map((word) => word[0]);
    return initials.join("").toUpperCase();
  };

  const renderTicketsByUser = (userId) => {
    let filteredTickets = tickets.filter((ticket) => ticket.userId === userId);
    if (selectedItem2 === "Priority") {
      filteredTickets = filteredTickets.sort((a, b) => b.priority - a.priority);
    } else if (selectedItem2 === "Title") {
      filteredTickets = filteredTickets.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return filteredTickets.map((ticket) => (
      <Card
        key={ticket.id}
        id={ticket.id}
        title={ticket.title}
        tag={ticket.tag}
        userId={ticket.userId}
        status={ticket.status}
        priority={ticket.priority}
      />
    ));
  };

  return (
    <div className="GroupByUser">
      {users.map((user) => (
        <div key={user.id} className="user-column">
          <div className="user-heading">
            <div className="user-group-left">
              <div className="profile-icon">
                <div className="user-profile-container">
                  {user.name && (
                    <div
                      className="card-profile-icon"
                      style={{ backgroundColor: getRandomDarkColor() }}
                    >
                      <div className="card-initials">
                        {getAbbreviation(user.name)}
                      </div>
                    </div>
                  )}
                  <div
                    className={`card-availability-indicator ${
                      user.available ? "available" : "not-available"
                    }`}
                  ></div>
                </div>
              </div>
              <div className="user-name">{user.name}</div>
              <div className="ticket-count">{countTicketsByUser(user.id)}</div>
            </div>
            <div className="user-group-right">
              <AddIcon />
              <MoreHorizIcon />
            </div>
          </div>
          {renderTicketsByUser(user.id)}
        </div>
      ))}
    </div>
  );
}

export default GroupByUser;
