// data.js

let tickets = [];
let users = [];

async function fetchData() {
  try {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const data = await response.json();
    tickets = data.tickets;
    users = data.users;
    return { tickets, users };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export { fetchData, tickets, users };
