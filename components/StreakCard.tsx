import { FaFire } from "react-icons/fa";

type Props = {
  streak: number;
};

export default function StreakCard({ streak }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-xl flex items-center gap-4">
      <FaFire className="text-orange-500 text-4xl animate-pulse" />

      <div>
        <h2 className="text-lg font-semibold">Current Streak</h2>
        <p className="text-2xl font-bold">{streak} days</p>
      </div>
    </div>
  );
}
