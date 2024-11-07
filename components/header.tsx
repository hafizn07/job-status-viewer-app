import SelectFilter from "./select-filter";

interface HeaderProps {
  statusFilter: JobStatus | "all";
  setStatusFilter: (status: JobStatus | "all") => void;
}

const Header = ({ statusFilter, setStatusFilter }: HeaderProps) => (
  <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2 sm:gap-0">
    <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
      Print Job Status Viewer
    </h1>
    <SelectFilter value={statusFilter} onChange={setStatusFilter} />
  </div>
);

export default Header;
