// data.js

// let tickets = [];
// let users = [];

// // Function to fetch data from the API
// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://api.quicksell.co/v1/internal/frontend-assignment"
//     );
//     const data = await response.json();
//     // Extract tickets and users from the API data
//     tickets = data.tickets;
//     users = data.users;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// // Call the fetchData function to fetch data when the module is imported
// fetchData();

// // Export tickets and users
// export { tickets, users };

const tickets = [
  {
    id: "CAM-1",
    title: "Update User Profile Page UI",
    tag: ["Feature request"],
    userId: "usr-1",
    status: "Todo",
    priority: 4,
  },
  {
    id: "CAM-2",
    title:
      "Add Multi-Language Support - Enable multi-language support within the application.",
    tag: ["Feature Request"],
    userId: "usr-2",
    status: "Done",
    priority: 3,
  },
  {
    id: "CAM-3",
    title: "Optimize Database Queries for Performance",
    tag: ["Feature Request"],
    userId: "usr-2",
    status: "Cancelled",
    priority: 1,
  },
  {
    id: "CAM-4",
    title: "Implement Email Notification System",
    tag: ["Feature Request"],
    userId: "usr-1",
    status: "In progress",
    priority: 3,
  },
  {
    id: "CAM-5",
    title: "Enhance Search Functionality",
    tag: ["Feature Request"],
    userId: "usr-5",
    status: "In progress",
    priority: 0,
  },
  {
    id: "CAM-6",
    title: "Third-Party Payment Gateway",
    tag: ["Feature Request"],
    userId: "usr-2",
    status: "Todo",
    priority: 1,
  },
  {
    id: "CAM-7",
    title: "Create Onboarding Tutorial for New Users",
    tag: ["Feature Request"],
    userId: "usr-1",
    status: "Backlog",
    priority: 2,
  },
  {
    id: "CAM-8",
    title: "Implement Role-Based Access Control (RBAC)",
    tag: ["Feature Request"],
    userId: "usr-3",
    status: "Done",
    priority: 3,
  },
  {
    id: "CAM-9",
    title: "Upgrade Server Infrastructure",
    tag: ["Feature Request"],
    userId: "usr-5",
    status: "Todo",
    priority: 2,
  },
  {
    id: "CAM-10",
    title: "Conduct Security Vulnerability Assessment",
    tag: ["Feature Request"],
    userId: "usr-4",
    status: "Backlog",
    priority: 1,
  },
];

const users = [
  { id: "usr-1", name: "Anoop sharma", available: false },
  { id: "usr-2", name: "Yogesh", available: true },
  { id: "usr-3", name: "Shankar Kumar", available: true },
  { id: "usr-4", name: "Ramesh", available: true },
  { id: "usr-5", name: "Suresh", available: true },
];

export { tickets, users };
