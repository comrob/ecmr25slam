#!/bin/bash

# The name of the file where all the text will be dumped.
OUTPUT_FILE="llm_context_dump.txt"

# --- Script Start ---

# Ensure the output file is empty before we start.
> "$OUTPUT_FILE"

echo "Dumping project context to $OUTPUT_FILE..."

# 1. Add the directory tree to the top of the file for context.
# We exclude the '_site' directory as it's generated and redundant.
echo "## 🌳 Directory Structure" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
tree -I "_site" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
echo -e "\n\n" >> "$OUTPUT_FILE"

# 2. Add the contents of each relevant file.
echo "## 📄 File Contents" >> "$OUTPUT_FILE"

# Find all relevant text-based files, excluding the '_site' directory.
# We look for config, data, markdown, html, css, js, and gemfiles.
find . -type f \( \
  -name "_config.yml" -o \
  -name "*.yaml" -o \
  -name "*.yml" -o \
  -name "*.markdown" -o \
  -name "*.html" -o \
  -name "*.css" -o \
  -name "*.js" -o \
  -name "Gemfile" -o \
  -name "Gemfile.lock" \
\) -not -path "./_site/*" | while read -r file; do
  
  # Add a separator with the file's path.
  echo "---" >> "$OUTPUT_FILE"
  echo "### Path: $file" >> "$OUTPUT_FILE"
  echo '```' >> "$OUTPUT_FILE"
  
  # Dump the file's content.
  cat "$file" >> "$OUTPUT_FILE"
  
  # Close the code block and add some space.
  echo '```' >> "$OUTPUT_FILE"
  echo -e "\n" >> "$OUTPUT_FILE"
done

echo "✅ Success! Project context has been saved to $OUTPUT_FILE"