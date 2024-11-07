import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility to count jobs by status
export function getStatusCounts(jobs: PrintJob[]) {
  return jobs.reduce(
    (acc: Record<JobStatus, number>, job) => {
      acc[job.status] = (acc[job.status] || 0) + 1;
      return acc;
    },
    { queued: 0, "in-progress": 0, completed: 0 }
  );
}

// Utility to filter jobs based on role and selected status
export const getFilteredJobs = (
  jobs: PrintJob[],
  role: "Admin" | "Technician",
  status: JobStatus | "all"
) => {
  return jobs.filter((job) => {
    if (role === "Technician" && job.status !== "in-progress") return false;
    if (status === "all") return true;
    return job.status === status;
  });
};
