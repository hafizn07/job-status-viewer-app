import clsx from "clsx";

interface PrintJob {
  id: number;
  name: string;
  status: "queued" | "in-progress" | "completed";
}

interface PrintJobTableProps {
  jobs: PrintJob[];
}

const DataTable = ({ jobs }: PrintJobTableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Job ID
            </th>
            <th scope="col" className="px-6 py-3">
              Job Name
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr
              key={job.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{job.id}</td>
              <td className="px-6 py-4">{job.name}</td>
              <td
                className={clsx("px-6 py-4 capitalize font-semibold", {
                  "text-slate-500": job.status === "queued",
                  "text-sky-500": job.status === "in-progress",
                  "text-emerald-500": job.status === "completed",
                })}
              >
                {job.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
