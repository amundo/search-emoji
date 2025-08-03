// Run with: deno run --allow-read --allow-write convert-emoji-annotations.js

const inputPath = "emoji-data.json"
const outputPath = "emoji.json"

// Read and parse the input file
const raw = await Deno.readTextFile(inputPath)
const source = JSON.parse(raw)

// Convert annotations to desired format
const result = []

for (const [emoji, data] of Object.entries(source.annotations.annotations)) {
  const keywords = data.default || []
  const description = (data.tts && data.tts[0]) || ""
  result.push({ emoji, keywords, description })
}

// Output as an ES module
const output = JSON.stringify(result, null, 2)


await Deno.writeTextFile(outputPath, output)
console.log(`✅ Converted ${result.length} emoji to ${outputPath}`)
