import { readJSON, writeJSON } from 'https://deno.land/x/flat/mod.ts'

const csv = await readCSV('./release.csv')

// const newdata = [] 
// const rows = data.feed.entry

// for(const row of rows) {
//     const formattedRow = {}

//     for(const key in row) {
//       if(key.startsWith("gs$")) {
//         formattedRow[key.replace("gs$", "")] = row[key].$t
//       }
//     }

//     newdata.push(formattedRow)
//   }

const newfile = `subset_of_csv.json`
await writeJSON(newfile, csv)
