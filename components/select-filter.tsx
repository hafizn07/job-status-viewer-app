"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRole } from "@/contexts/role-context";

interface StatusFilterSelectProps {
  value: JobStatus | "all";
  onChange: (value: JobStatus | "all") => void;
}

const SelectFilter = ({ value, onChange }: StatusFilterSelectProps) => {
  const { role } = useRole();

  return (
    <div className="mb-4 flex items-center justify-center">
      <label className="mr-2">Filter by Status:</label>
      <Select
        value={value}
        onValueChange={(value) => onChange(value as JobStatus | "all")}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="queued" disabled={role === "Technician"}>
              Queued
            </SelectItem>
            <SelectItem value="in-progress">In-Progress</SelectItem>
            <SelectItem value="completed" disabled={role === "Technician"}>
              Completed
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectFilter;
