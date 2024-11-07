declare type JobStatus = "queued" | "in-progress" | "completed";

declare type PrintJob = {
  id: number;
  name: string;
  status: JobStatus;
};
