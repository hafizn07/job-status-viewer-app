import JobStatusViewer from "@/components/job-status-viewer";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center dot-pattern-overlay">
      {/* Pass either "Admin" or "Technician" as role */}
      <JobStatusViewer role="Admin" />
    </div>
  );
}
