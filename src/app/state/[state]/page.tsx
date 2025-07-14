import { getDirectoryData } from "../../../utils/parseDirectoryCsv";
import { getStateFullName } from "../../../utils/stateNames";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "../../../components/BackButton";
import ResourceLink from "../../../components/ResourceLink";
import React from "react";

interface DirectoryRow {
  State: string;
  [key: string]: string;
}

interface StatePageProps {
  params: Promise<{ state: string }>;
}

export default async function StatePage({ params }: StatePageProps) {
  const { state: abbr } = await params;
  const fullName = getStateFullName(abbr);
  const data = getDirectoryData() as DirectoryRow[];
  const stateRows = data.filter((row) => row.State === abbr);

  if (stateRows.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-4xl lg:max-w-6xl bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/40">
          <BackButton />
          <h1 className="text-2xl font-bold mb-8 text-center text-gray-900 drop-shadow">
            {fullName} URLs With Information About {fullName}&apos;s Small Claims Courts
          </h1>
          <ul className="space-y-6">
            {stateRows.map((row, idx) => (
              <li key={idx} className="bg-white/40 backdrop-blur-md border border-white/30 rounded-xl p-5 shadow-md hover:shadow-lg transition">
                <div className="font-semibold text-lg mb-1 text-gray-900">
                  {row["Website Name (and County if applicable)"]}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {row["Website Category"]}
                </div>
                <ResourceLink abbr={abbr} url={row.URL} />
                {row["Content Provided"] && (
                  <div className="text-xs text-gray-500 mt-2">
                    {row["Content Provided"]}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link href="/" className="text-blue-600 hover:underline">← Back to all states</Link>
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