
<h1 align="center">Print Job Tracker</h1>

<p align="center">
  A simple application to manage and view print jobs, focusing on basic component structure, data display, and simple user interactions. This application allows users to filter jobs by status and view the jobs based on their role (Admin or Technician). Built with <a href="https://nextjs.org" target="_blank">Next.js</a> and <a href="https://reactjs.org" target="_blank">React</a>.
</p>

![screenshot](/public/assets/demo.gif)

### Live Demo

[View the Live Application](https://job-status-viewer-app.vercel.app/)

## Features

* Display Print Jobs: Shows a list of print jobs with job ID, job name, and job status (e.g., queued, in-progress, completed).
* Status Filter: Provides a dropdown to filter jobs by status, updating the displayed list accordingly.
* Role-Based Display:
  * When logged in as an Admin, all jobs are visible.
  * When logged in as a Technician, only "in-progress" jobs are shown.
* Job Status Summary: Displays a summary message indicating the total number of jobs in each status.

## Technologies Used

* **Frontend**: React (with Hooks and functional components)
* **Styling**: TailwindCSS (responsive design)
* **Data**: JSON mock data for print jobs
* **Optional**: State management using `useContext` for role handling

## Installation

### Prerequisites

Ensure you have Node.js and npm installed on your machine. This project was built using Node.js version 20+ and npm version 10+.

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/hafizn07/job-status-viewer-app
    ```

2. **Navigate to the project folder**:

    ```bash
    cd job-status-viewer-app
    ```

3. **Install dependencies**:

    This app is running using React 19 Some packages may fail to install due to peer dependency issues in npm

    ```bash
    npm install

    or 

    npm install --legacy-peer-deps
    ```

4. **Run the application**:

    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Status Filter

Use the dropdown menu to filter jobs by status:

* Select "All" to view all jobs.
* Choose a specific status like "queued", "in-progress", or "completed" to view only jobs in that status.

### Role-Based Display

Switch roles to see different views:

* **Admin**: View all jobs.
* **Technician**: View only "in-progress" jobs.

### Job Summary

View a status summary with the total number of jobs in each status displayed at the top of the page.

## Project Structure

```plaintext
job-status-viewer-app/
├── app
│   ├── jobs-dashboard
│   │       ├── page.tsx            # Main component for the jobs dashboard
│   ├── globals.css                 # Global CSS styles
│   ├── layout.tsx                  # Application layout component
│   └── page.tsx                    # Main application page component
│
├── components
│       ├── auth-page.tsx           # Authentication page component
│       ├── data-table.tsx          # Data table component
│       ├── github-button.tsx       # Github button component
│       ├── header.tsx              # Application header component
│       ├── job-status-viewer.tsx   # Job status viewer component
│       ├── select-filter.tsx       # Select filter component
│       └── status-card.tsx         # Status card component
│       └── stat-card.tsx           # Static card component
├── contexts
│       └── role-context.tsx        # Context for handling user roles
├── data
│   └── printJobs.json              # Mock JSON data for print jobs
├── lib
│    └── utils.ts                   # Utility functions
├── public                          # Public assets
├── types                           # TypeScript type definitions
│   └── index.d.ts
└── README.md                       # Project documentation
```

## Components

1. **JobStatusViewer**: The main component that handles role-based display logic and renders the status cards and data table.

2. **StatusCards**: Displays a summary of job statuses (queued, in-progress, completed) with counts for each.

3. **DataTable**: A table component that lists jobs based on filters and role restrictions.

4. **Header**: Contains the page title and the `SelectFilter` component for filtering jobs by status.

5. **SelectFilter**: A dropdown component that allows users to select a job status for filtering.

6. **RoleContext**: A context API component for managing the user role (`Admin` or `Technician`).

## Additional Information

### Mock Data

The application uses mock data stored in `data/mockData.json` for displaying job statuses. Modify this file to add or update job details as needed.

### Responsive Design

The application is responsive and designed to provide a seamless user experience across desktop and mobile devices.

### Future Improvements

* **User Authentication**: Implement actual user authentication to manage roles securely.
* **API Integration**: Replace the mock data with real data fetched from an API.
* **Enhanced UI**: Add animations and transitions for improved interactivity.
