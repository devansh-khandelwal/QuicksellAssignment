import React from "react";
import "./GroupByUser.css";
import Card from "../../components/Card/Card";

// Assuming you have the data stored in a variable named apiData
import { tickets, users } from "../../data"; //

function GroupByUser() {
  const countTicketsByUser = (userId) => {
    return tickets.filter((ticket) => ticket.userId === userId).length;
  };

  const renderTicketsByUser = (userId) => {
    const filteredTickets = tickets.filter(
      (ticket) => ticket.userId === userId
    );

    return filteredTickets.map((ticket) => (
      <Card
        key={ticket.id}
        id={ticket.id}
        title={ticket.title}
        tag={ticket.tag}
        userId={ticket.userId}
        status={ticket.status}
        priority={ticket.priority}
        availability={
          users.find((u) => u.id === ticket.userId)?.available || false
        }
      />
    ));
  };

  return (
    <div className="GroupByUser">
      {users.map((user) => (
        <div key={user.id} className="user-column">
          <div className="column-header">
            <div className="profile-icon">
              {/* You can customize the profile icon here */}
              {user.name[0]}
            </div>
            <div className="user-info">
              <p className="user-name">{user.name}</p>
              <p className="ticket-count">
                {countTicketsByUser(user.id)} tickets
              </p>
            </div>
          </div>
          {renderTicketsByUser(user.id)}
        </div>
      ))}
    </div>
  );
}

export default GroupByUser;
