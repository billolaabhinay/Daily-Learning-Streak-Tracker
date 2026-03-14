"use client";

type Props = {
  onStudy: () => void;
};

export default function StudyButton({ onStudy }: Props) {
  return (
    <button
      onClick={onStudy}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-4"
    >
      I Studied Today
    </button>
  );
}
