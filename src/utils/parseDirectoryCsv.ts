import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

export function getDirectoryData() {
  const csvPath = path.join(process.cwd(), 'src', 'utils', '50 State Directory.csv');
  const file = fs.readFileSync(csvPath, 'utf8');
  const { data } = Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
  });
  return data;
} 