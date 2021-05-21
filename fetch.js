import { readJSON, writeJSON } from 'https://deno.land/x/flat/mod.ts'

// The filename is the first invocation argument
const filename = Deno.args[0] // Same name as downloaded_filename
const data = await readJSON(filename)

const newdata = [] 
const rows = data.feed.entry

for(const row of rows) {
    const formattedRow = {}

    for(const key in row) {
      if(key.startsWith("gs$")) {
        formattedRow[key.replace("gs$", "")] = row[key].$t
      }
    }

    newdata.push(formattedRow)
  }

await writeJSON(newfile, newData)
