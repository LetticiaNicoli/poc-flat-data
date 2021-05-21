import { readCSV, writeJSON } from 'https://deno.land/x/flat/mod.ts'
const csv = await readCSV('./release.csv')
const newfile = `subset_of_csv.json`
await writeJSON(newfile, csv)
