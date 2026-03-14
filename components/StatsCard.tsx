import { ReactNode } from "react";

type Props = {
  title: string;
  value: string | number;
  icon: ReactNode;
};

export default function StatsCard({ title, value, icon }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex items-center gap-4">

      <div className="text-3xl">
        {icon}
      </div>

      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>

    </div>
  );
}
