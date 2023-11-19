import React from "react";
import "./GroupByStatus.css";
import Card from "../../components/Card/Card";
import { tickets, users } from "../../data";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function GroupByStatus({ selectedItem2 }) {
  const ticketStatuses = [
    { status: "Todo", icon: <RadioButtonUncheckedIcon color="action" /> },
    { status: "Backlog", icon: <BorderColorOutlinedIcon color="action" /> },
    { status: "Done", icon: <CheckCircleIcon color="primary" /> },
    { status: "In progress", icon: <PendingOutlinedIcon color="action" /> },
    { status: "Cancelled", icon: <CancelIcon color="action" /> },
  ];

  const countTicketsByStatus = (status) => {
    return tickets.filter((ticket) => ticket.status === status).length;
  };

  const renderTicketsByStatus = (status) => {
    let filteredTickets = tickets.filter((ticket) => ticket.status === status);

    if (selectedItem2 === "Priority" || selectedItem2 === "Title") {
      filteredTickets = filteredTickets.sort((a, b) => {
        if (selectedItem2 === "Priority") {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    }

    return (
      <>
        <div className="status-column">
          <div className="status-heading">
            <div className="status-group-left">
              <div className="status-icons">
                <StatusIcon status={status} />
              </div>
              <div className="status-text">{status}</div>
              <div className="status-number-of-tickets">
                {countTicketsByStatus(status)}
              </div>
            </div>
            <div className="status-group-right">
              <AddIcon />
              <MoreHorizIcon />
            </div>
          </div>

          {filteredTickets.map((ticket) => {
            const user = users.find((u) => u.id === ticket.userId);

            return (
              <Card
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                tag={ticket.tag}
                userId={ticket.userId}
                priority={ticket.priority}
                name={user ? user.name : ""}
                availability={user ? user.available : false}
              />
            );
          })}
        </div>
      </>
    );
  };

  const StatusIcon = ({ status }) => {
    const statusInfo = ticketStatuses.find((s) => s.status === status);
    return statusInfo ? (
      <div className="card-status-icon">{statusInfo.icon}</div>
    ) : null;
  };

  return (
    <div className="GroupByStatus">
      {ticketStatuses.map((s) => renderTicketsByStatus(s.status))}
    </div>
  );
}

export default GroupByStatus;
