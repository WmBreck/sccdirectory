import { getStateFullName } from "../../../../utils/stateNames";
import BackButton from "../../../../components/BackButton";
import StateViewClient from "./StateViewClient";

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

export default function StateViewPage({ params }: { params: { state: string } }) {
  const abbr = params.state;
  const fullName = getStateFullName(abbr);

  return <StateViewClient stateAbbr={abbr} stateFullName={fullName} />;
} 