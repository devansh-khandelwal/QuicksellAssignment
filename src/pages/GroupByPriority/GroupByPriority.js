import React from "react";
import "./GroupByPriority.css";
import Card from "../../components/Card/Card";
import { tickets, users } from "../../data";

import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ErrorIcon from "@mui/icons-material/Error";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";

function GroupByPriority({ selectedItem2 }) {
  const priorityColumns = [
    { priority: 0, label: "No priority", icon: <MoreHorizIcon /> },
    {
      priority: 4,
      label: "Urgent",
      icon: <ErrorIcon color="error" />,
    },
    {
      priority: 3,
      label: "High",
      icon: <SignalCellularAltIcon color="action" />,
    },
    {
      priority: 2,
      label: "Medium",
      icon: <SignalCellularAltIcon color="action" />,
    },
    {
      priority: 1,
      label: "Low",
      icon: <SignalCellularAltIcon color="action" />,
    },
  ];

  const countTicketsByPriority = (priority) => {
    return tickets.filter((ticket) => ticket.priority === priority).length;
  };

  const renderTicketsByPriority = (priority) => {
    let filteredTickets = tickets.filter(
      (ticket) => ticket.priority === priority
    );

    if (selectedItem2 === "Priority") {
      filteredTickets = filteredTickets.sort((a, b) => b.priority - a.priority);
    } else if (selectedItem2 === "Title") {
      filteredTickets = filteredTickets.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

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
          name={user ? user.name : ""}
          availability={user ? user.available : false}
        />
      );
    });
  };

  return (
    <div className="GroupByPriority">
      {priorityColumns.map((priority) => (
        <div key={priority.priority} className="priority-column">
          <div className="priority-heading">
            <div className="priority-group-left">
              <div className="priority-icons">{priority.icon}</div>
              <div className="priority-text">{priority.label}</div>
              <div className="priority-number-of-tickets">
                {countTicketsByPriority(priority.priority)}
              </div>
            </div>
            <div className="priority-group-right">
              <AddIcon />
              <MoreHorizIcon />
            </div>
          </div>

          {renderTicketsByPriority(priority.priority)}
        </div>
      ))}
    </div>
  );
}

export default GroupByPriority;
