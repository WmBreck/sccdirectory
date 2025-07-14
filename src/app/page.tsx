import Link from "next/link";
import { getDirectoryData } from "../utils/parseDirectoryCsv";
import { getStateFullName } from "../utils/stateNames";
import BackButton from "../components/BackButton";

// Define the type for a row in the directory
interface DirectoryRow {
  State: string;
  [key: string]: string;
}

export default function Home() {
  const data = getDirectoryData() as DirectoryRow[];

  // Get unique states (including DC)
  const stateSet = new Set<string>();
  data.forEach((row) => {
    if (row.State) {
      stateSet.add(row.State);
    }
  });
  const states = Array.from(stateSet).sort();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-4xl lg:max-w-6xl bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/40">
          <BackButton />
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 drop-shadow">Welcome to the 50 State Small Claims Court Directory</h1>
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
              href="mailto:seiniger@gmail.com"
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
