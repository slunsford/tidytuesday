# Alt Text Generator

Generate accessible alt text for a chart in a TidyTuesday post and copy it to the clipboard.

## Instructions

1. If no chart ID is provided as an argument, list all available charts from the most recent post in `src/posts/` and ask which one to describe.

2. Once you have a chart ID:
   - Find the post containing that chart by searching frontmatter in `src/posts/*.md`
   - Extract the chart metadata (type, title, subtitle, legend if present)
   - Read the CSV data file from `src/_data/{file path from metadata}`

3. Generate concise alt text following these guidelines:
   - Start with the chart type (e.g., "Dot chart", "Donut chart", "Sankey diagram")
   - Include the title and what the data represents
   - Summarize key data points and trends (don't list every value)
   - For multi-series charts, mention series names and notable comparisons
   - Keep it under 200 words
   - Use plain language, no markdown

4. Copy the generated alt text to the clipboard using `pbcopy`

5. Display the alt text to the user and confirm it was copied

## Example Output

For a dot chart showing AI adoption:
"Dot chart titled 'AIdoption Curve' showing AI-assisted commits and pull requests from May to December 2025. Pull requests remained relatively steady between 10-22 per month, while commits grew dramatically from 2 in May to 53 in December, indicating accelerating AI adoption in the development workflow."
