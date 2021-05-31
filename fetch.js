import { readCSV, writeJSON } from 'https://deno.land/x/flat/mod.ts'
const csv = await readCSV('./poc.csv')
const newfile = `subset_of_poc.json`
await writeJSON(newfile, csv)
