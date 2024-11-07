import SelectFilter from "./select-filter";

interface HeaderProps {
  statusFilter: JobStatus | "all";
  setStatusFilter: (status: JobStatus | "all") => void;
}

const Header = ({ statusFilter, setStatusFilter }: HeaderProps) => (
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-2xl font-bold">Print Job Status Viewer</h1>
    <SelectFilter value={statusFilter} onChange={setStatusFilter} />
  </div>
);

export default Header;
