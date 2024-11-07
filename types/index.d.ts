declare type JobStatus = "queued" | "in-progress" | "completed";

declare type PrintJob = {
  id: number;
  name: string;
  status: JobStatus;
};

declare type Role = "Admin" | "Technician" | null;
