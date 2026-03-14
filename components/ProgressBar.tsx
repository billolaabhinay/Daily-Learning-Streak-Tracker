type Props = {
  totalDays: number;
};

export default function ProgressBar({ totalDays }: Props) {
  const progress = Math.min((totalDays / 30) * 100, 100);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-2">Monthly Progress</h2>

      <div className="w-full bg-gray-200 h-4 rounded-full">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-2 text-sm">{totalDays}/30 days studied</p>
    </div>
  );
}
