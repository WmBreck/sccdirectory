import { getStateFullName } from "../../../../utils/stateNames";
import BackButton from "../../../../components/BackButton";
import StateViewClient from "./StateViewClient";
import { Suspense } from "react";

// Generate static params for all states
export async function generateStaticParams() {
  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC'
  ];
  
  return states.map((state) => ({
    state: state,
  }));
}

interface StateViewPageProps {
  params: Promise<{ state: string }>;
}

export default async function StateViewPage({ params }: StateViewPageProps) {
  const { state: abbr } = await params;
  const fullName = getStateFullName(abbr);

  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
        <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
          <div className="w-full max-w-4xl lg:max-w-6xl bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/40 text-center">
            <BackButton />
            <h1 className="text-2xl font-bold mb-8 text-gray-900 drop-shadow">Loading...</h1>
          </div>
        </div>
      </div>
    }>
      <StateViewClient stateAbbr={abbr} stateFullName={fullName} />
    </Suspense>
  );
} 