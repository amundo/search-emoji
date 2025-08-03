# 🔍 Emoji Search

A fast, lightweight emoji search tool with advanced filtering capabilities and favicon generation. Built with vanilla JavaScript and Web Standards.

## ✨ Features

- **⚡ Fast Search**: Instant emoji search with fuzzy matching
- **🔧 Boolean Operators**: Use `-` to exclude terms (e.g., `fantasy -santa`)
- **🎯 Quoted Search**: Use quotes for exact word matching (e.g., `"demon"`)
- **📤 Multiple Export Options**: Copy as text, JSON, or HTML favicon
- **📱 Mobile Friendly**: Works on desktop and mobile devices
- **🚫 No Dependencies**: Pure JavaScript, no frameworks required

## 📁 Files

```
├── convert.js          # 🔄 Converts CLDR data to searchable format
├── emoji-data.json     # 📊 Raw emoji data from Unicode CLDR
├── emoji.json          # 🔍 Processed emoji data for search
└── search-emoji.html   # 🌐 Main search interface
```

## 🚀 Usage

### 🔤 Basic Search
Simply type keywords to find emojis:
- `fire` 🔥 - finds fire-related emojis
- `happy face` 😊 - finds happy face emojis

### 🎛️ Advanced Search
- **❌ Exclude terms**: `fantasy -santa` (fantasy emojis without Santa)
- **🎯 Exact matching**: `"demon"` (exact word matches only)
- **🔗 Combined**: `fantasy -"santa claus"` (exclude exact phrase)

### 🖱️ Interaction
- **👆 Single click**: Copy emoji to clipboard
- **👆👆 Double click**: Select emoji for favicon generation
- **📋 Copy buttons**: Export results in different formats

### 🌐 Favicon Generation
1. Search for your desired emoji
2. Double-click to select a specific emoji (optional)
3. Click "🌐 Copy as favicon" to generate HTML `<link>` tag
4. Paste the result into your HTML `<head>` section

## 📡 Data Source

Emoji data is sourced from the Unicode Common Locale Data Repository (CLDR):
```
https://raw.githubusercontent.com/unicode-org/cldr-json/refs/heads/main/cldr-json/cldr-annotations-full/annotations/en/annotations.json
```

## 🛠️ Setup

1. **📥 Download or update emoji data**:
   ```bash
   curl -o emoji-data.json https://raw.githubusercontent.com/unicode-org/cldr-json/refs/heads/main/cldr-json/cldr-annotations-full/annotations/en/annotations.json
   ```

2. **🔄 Convert to searchable format**:
   ```bash
   node convert.js
   ```

3. **🖥️ Serve the files** (emoji search requires a web server due to JSON loading):
   ```bash
   # Using Deno 🦕
   deno serve --port 8000 .
   
   # Using Python 🐍
   python -m http.server 8000
   
   # Using Node.js 📦
   npx serve .
   ```

4. **🌐 Open** `http://localhost:8000/search-emoji.html`

## ⚙️ Technical Details

The search implementation uses:
- **🔍 Fuzzy matching** for unquoted searches
- **🎯 Word boundary regex** for quoted searches  
- **➖ Boolean filtering** with exclusion operators
- **📊 Score-based ranking** for result relevance
- **🖼️ SVG data URIs** for favicon generation

Built with modern JavaScript features including ES modules, async/await, and the Clipboard API.

## 🌍 Browser Support

Works in all modern browsers that support:
- ⚡ ES6 modules
- 📡 Fetch API
- 📋 Clipboard API
- 🖼️ SVG data URIs

## 📄 License

Public domain - feel free to use, modify, and distribute! 🎉.