# Employee Leave Management System

## Overview

The **Employee Leave Management System** is a web application built using **React.js**, **Node.js (Express.js)**, and **MySQL**. It allows employees to apply for leave, managers to approve/reject leave requests, and administrators to track leave applications.

## Features

- **Employee Module:** Apply for leave, view leave status, check total applied leaves.
- **Manager Module:** Approve or reject leave requests using dedicated buttons.
- **Leave Tracking:** Search for a leave request by its ID to check if it's approved or not.
- **Dashboard:** A user-friendly interface for managing leave applications.

## Technology Stack

- **Frontend:** React.js, React Router
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Styling:** CSS, Bootstrap, or Tailwind CSS

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MySQL
- Git

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-repo/employee-leave-management.git
   cd employee-leave-management
   ```

2. **Backend Setup:**

   ```sh
   cd backend
   npm install
   ```

   - Create a `.env` file in the `backend` directory and add the following:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=leave_management
     PORT=3000
     ```
   - Start the server:
     ```sh
     npm start
     ```

3. **Frontend Setup:**

   ```sh
   cd ../frontend
   npm install
   npm start
   ```

## API Endpoints

| Method | Endpoint                       | Description                              |
| ------ | ------------------------------ | ---------------------------------------- |
| POST   | `/leave`                       | Apply for leave                          |
| PUT    | `/leave/:id`                   | Approve or reject a leave request        |
| GET    | `/leave`                       | Get all leave requests                   |
| GET    | `/leave/employee/:employee_id` | Get total applied leaves for an employee |

## Deployment

- **Frontend Deployment:** Vercel, Netlify
- **Backend Deployment:** Render, Digital Ocean, AWS EC2
- **Database:** Hosted MySQL (e.g., AWS RDS, Railway, Supabase)

## Future Enhancements

- Export leave reports to Excel/PDF
- Integration with Slack/Microsoft Teams

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss.

## License

MIT License

