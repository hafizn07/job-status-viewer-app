import { useRole } from "@/contexts/role-context";
import StatCard from "./stat-card";

interface StatusCounts {
  queued: number;
  "in-progress": number;
  completed: number;
}

const StatusCards = ({ statusCounts }: { statusCounts: StatusCounts }) => {
  const { role } = useRole();

  return (
    <section className="flex w-full flex-col justify-between gap-5 mb-8 sm:flex-row xl:gap-10">
      {(role === "Admin" || role === "Technician") && (
        <StatCard
          type="in-progress"
          count={statusCounts["in-progress"]}
          label="In-Progress"
          icon="/assets/icons/pending.svg"
        />
      )}
      {role === "Admin" && (
        <>
          <StatCard
            type="queued"
            count={statusCounts.queued}
            label="Queued"
            icon="/assets/icons/queue.svg"
          />
          <StatCard
            type="completed"
            count={statusCounts.completed}
            label="Completed"
            icon="/assets/icons/check.svg"
          />
        </>
      )}
    </section>
  );
};

export default StatusCards;
