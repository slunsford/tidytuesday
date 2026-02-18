# Alt Text Generator

Generate accessible alt text for a chart in a TidyTuesday post and save it to the chart's frontmatter.

## Instructions

1. If no chart ID is provided as an argument, list all available charts from the most recent post in `src/posts/` and ask which one to describe.

2. Once you have a chart ID:
   - Find the post containing that chart by searching frontmatter in `src/posts/*.md`
   - Extract the chart metadata (type, title, subtitle, legend if present)
   - Read the CSV data file from `src/_data/charts/{file path from metadata}`

3. Generate concise alt text following these guidelines:
   - Start with the chart type (e.g., "Line chart", "Donut chart", "Sankey diagram")
   - Include the title and what the data represents
   - Summarize key data points and trends (don't list every value)
   - Identify visible trends without over-interpreting the data—describe what the chart shows, not what it might mean
   - For multi-series charts, mention series names and notable comparisons
   - Keep it under 200 words
   - Use plain language, no markdown

4. Add the alt text to the chart's `alt` key in the post frontmatter:
   ```yaml
   charts:
     chart-id:
       type: line
       # ... other metadata
       alt: "Generated alt text here"
   ```

5. Also copy the alt text to the clipboard using `pbcopy`

6. Display the alt text to the user and confirm it was saved and copied

## Example Output

For a line chart showing AI adoption:
"Line chart titled 'AIdoption Curve' showing AI-assisted commits and pull requests from May to December 2025. Pull requests remained relatively steady between 10-22 per month, while commits started at 2 in May, stayed low through September, then climbed to 24 in October, 41 in November, and 53 in December."
