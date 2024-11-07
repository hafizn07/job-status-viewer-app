"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import JobStatusViewer from "@/components/job-status-viewer";
import { RoleProvider } from "@/contexts/role-context";

const JobsDashboardPage = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") as Role;
  const router = useRouter();

  // Redirect if role is missing or invalid
  useEffect(() => {
    if (!role || (role !== "Admin" && role !== "Technician")) router.push("/");
  }, [role, router]);

  if (!role || (role !== "Admin" && role !== "Technician")) return null;

  return (
    <RoleProvider role={role}>
      <div className="min-h-screen p-6 flex items-center justify-center bg-gray-100">
        <JobStatusViewer />
      </div>
    </RoleProvider>
  );
};

export default JobsDashboardPage;
