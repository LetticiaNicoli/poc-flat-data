import { readJSON, writeJSON } from 'https://deno.land/x/flat/mod.ts'

const data = await readJSON('./release.json')

const newdata = [] 
const rows = data.feed.entry

for(const row of rows) {
    const formattedRow = {}

    for(const key in row) {
      if(key.startsWith("gs$")) {
        formattedRow[key.inputValue] = row[key].$t
      }
    }

    newdata.push(formattedRow)
  }

const newfile = `subset_of_release.json`
await writeJSON(newfile, newdata)
