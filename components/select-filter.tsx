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

interface StatusFilterSelectProps {
  value: JobStatus | "all";
  onChange: (value: JobStatus | "all") => void;
}

const SelectFilter = ({ value, onChange }: StatusFilterSelectProps) => {
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
            <SelectItem value="queued">Queued</SelectItem>
            <SelectItem value="in-progress">In-Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectFilter;
