"use client";
import Link from "next/link";
import { getDirectoryData } from "../utils/parseDirectoryCsv";
import { getStateFullName } from "../utils/stateNames";
import BackButton from "../components/BackButton";
import { useEffect, useState } from "react";

// Define the type for a row in the directory
interface DirectoryRow {
  State: string;
  [key: string]: string;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Home() {
  const [data, setData] = useState<DirectoryRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDirectoryData().then((rows) => {
      setData(rows || []);
      setLoading(false);
    });
  }, []);

  // Get unique states (including DC)
  const stateSet = new Set<string>();
  data.forEach((row) => {
    if (row.State) {
      stateSet.add(row.State);
    }
  });
  const states = Array.from(stateSet).sort();

  const [showModal, setShowModal] = useState(false);

  function handlePaintedDoorClick() {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'painted_door_click', {
        event_category: 'Painted Door',
        event_label: 'Court Website Directory',
      });
    }
    setShowModal(true);
  }

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-4xl lg:max-w-6xl bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/40">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 drop-shadow">
            Welcome to the 50 State Small Claims Court URL Directory
          </h1>
          <div className="flex justify-center mb-4">
            <button
              onClick={handlePaintedDoorClick}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition font-semibold"
            >
              Court Website Directory
            </button>
          </div>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Thanks for your interest!</h2>
                <p className="mb-4 text-gray-700">The Court Website Directory feature is coming soon.<br/>If there are other features that you would like, please email us with your suggestions.</p>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <p className="text-center text-lg mb-8 text-gray-700">
            Click on a state to see its Small Claims Court related webpages and links to PDF documents.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {states.map((state) => (
              <Link
                key={state}
                href={`/state/${encodeURIComponent(state)}`}
                className="bg-white/40 backdrop-blur-md border border-white/30 rounded-xl px-4 py-2 text-blue-700 hover:bg-white/60 hover:shadow-lg hover:scale-105 transition text-base font-medium shadow-md whitespace-nowrap mb-2"
                style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
              >
                {getStateFullName(state)}
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center">
            <span className="mb-2 text-gray-700">Please email us your suggestions for improvement or inclusions</span>
            <a
              href="mailto:lawgorithmai@gmail.com"
              className="px-6 py-2 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl text-blue-700 hover:bg-white/60 hover:shadow-lg hover:scale-105 transition font-semibold shadow-md"
              style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
            >
              Email Suggestions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
