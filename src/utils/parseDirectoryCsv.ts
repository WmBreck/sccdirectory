import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getDirectoryData() {
  const { data, error } = await supabase
    .from('50StateSCC-URLS')
    .select('*');
  if (error) throw error;
  return data;
} 