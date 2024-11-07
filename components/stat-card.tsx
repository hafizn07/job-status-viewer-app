import clsx from "clsx";
import Image from "next/image";

type StatCardProps = {
  type: "queued" | "in-progress" | "completed";
  count: number;
  label: string;
  icon: string;
};

const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
  return (
    <div
      className={clsx("flex flex-1 flex-col gap-6 rounded-lg p-4 shadow-md", {
        "bg-slate-100/50": type === "queued",
        "bg-sky-100/50": type === "in-progress",
        "bg-emerald-100/50": type === "completed",
      })}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          height={32}
          width={32}
          alt="appointments"
          className="size-8 w-fit"
        />
        <h2 className="text-[32px] leading-[36px] font-bold">{count}</h2>
      </div>

      <p className="text-[14px] leading-[18px] font-normal">{label}</p>
    </div>
  );
};

export default StatCard;
