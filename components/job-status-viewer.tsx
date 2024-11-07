"use client";

import { useState } from "react";
import printJobs from "@/data/printJobs.json";
import DataTable from "./data-table";
import StatusCards from "./status-card";
import Header from "./header";
import { getFilteredJobs, getStatusCounts } from "@/lib/utils";

interface JobStatusViewerProps {
  role: "Admin" | "Technician";
}

const JobStatusViewer = ({ role }: JobStatusViewerProps) => {
  const [statusFilter, setStatusFilter] = useState<JobStatus | "all">("all");

  const filteredJobs = getFilteredJobs(printJobs as PrintJob[], role, statusFilter);
  const statusCounts = getStatusCounts(printJobs as PrintJob[]);

  return (
    <div className="p-6 w-full max-w-4xl mx-auto bg-white shadow-md rounded">
      <Header statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
      <StatusCards statusCounts={statusCounts} />
      <DataTable jobs={filteredJobs} />
    </div>
  );
};

export default JobStatusViewer;

