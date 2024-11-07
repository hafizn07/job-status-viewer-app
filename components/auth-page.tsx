"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function AuthPage() {
  const router = useRouter();

  const handleLogin = (selectedRole: "Admin" | "Technician") => {
    router.push(`/jobs-dashboard?role=${selectedRole}`);
  };

  return (
    <div className="p-6 w-full max-w-xl mx-auto bg-white shadow-md rounded">
      <h1 className="text-2xl text-center font-semibold mb-4">
        Print Job Tracker.
      </h1>
      <div className="flex flex-col gap-4">
        <Button onClick={() => handleLogin("Admin")}>Login as Admin</Button>
        <Button onClick={() => handleLogin("Technician")}>
          Login as Technician
        </Button>
      </div>
    </div>
  );
}
