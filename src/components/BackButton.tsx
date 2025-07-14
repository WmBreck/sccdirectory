"use client";

export default function BackButton() {
  return (
    <button
      className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-800"
      onClick={() => window.history.back()}
      type="button"
    >
       Back
    </button>
  );
} 