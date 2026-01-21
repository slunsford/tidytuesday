# TidyTuesday

A data visualization site for [TidyTuesday](https://tidytues.day/), the weekly social data project. Each week features CSS-based charts built with semantic HTML.

**Live site:** https://tidytuesday.seanlunsford.com

## Tech Stack

- [Eleventy v3](https://www.11ty.dev/) - Static site generator
- [eleventy-plugin-uncharted](https://github.com/slunsford/uncharted) - CSS-based charts from CSV data
- Vanilla CSS with `light-dark()` for automatic dark mode
- Markdown with YAML frontmatter

## Structure

```
src/
├── _data/           # Global data (YAML) and chart CSV files
│   └── charts/      # CSV data organized by date
├── _layouts/        # Nunjucks templates
├── _includes/       # Reusable components
├── css/             # Modular vanilla CSS
├── posts/           # Weekly TidyTuesday posts
└── pages/           # Static pages
```
