import React from "react";
import "./GroupByStatus.css";
import Card from "../../components/Card/Card";

// Assuming you have the data stored in a variable named apiData
import { tickets, users } from "../../data"; // Adjust the import path

function GroupByStatus() {
  const statusColumns = {
    Todo: "Todo",
    Backlog: "Backlog",
    Done: "Done",
    "In progress": "In progress",
    Cancelled: "Cancelled",
  };

  const renderTicketsByStatus = (status) => {
    const filteredTickets = tickets.filter(
      (ticket) => ticket.status === status
    );

    return filteredTickets.map((ticket) => {
      const user = users.find((u) => u.id === ticket.userId);

      return (
        <Card
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          tag={ticket.tag}
          userId={ticket.userId}
          status={ticket.status}
          priority={ticket.priority}
          name={user ? user.name : ""}
          availability={user ? user.available : false}
        />
      );
    });
  };

  return (
    <div className="GroupByStatus">
      {Object.keys(statusColumns).map((status) => (
        <div key={status} className="status-column">
          <h4>{statusColumns[status]}</h4>
          {renderTicketsByStatus(status)}
        </div>
      ))}
    </div>
  );
}

export default GroupByStatus;
