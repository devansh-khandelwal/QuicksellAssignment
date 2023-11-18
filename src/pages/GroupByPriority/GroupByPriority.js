import React from "react";
import "./GroupByPriority.css";
import Card from "../../components/Card/Card";

// Assuming you have the data stored in a variable named apiData
import { tickets, users } from "../../data"; // Adjust the import path

function GroupByPriority() {
  const priorityColumns = {
    0: "No priority",
    1: "Low",
    2: "Medium",
    3: "Hight",
    4: "Urgent",
  };

  const renderTicketsByPriority = (priority) => {
    const filteredTickets = tickets.filter(
      (ticket) => ticket.priority === priority
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
    <div className="GroupByPriority">
      {Object.keys(priorityColumns).map((priority) => (
        <div key={priority} className="priority-column">
          <h4>{priorityColumns[priority]}</h4>
          {renderTicketsByPriority(parseInt(priority))}
        </div>
      ))}
    </div>
  );
}

export default GroupByPriority;