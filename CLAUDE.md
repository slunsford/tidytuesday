# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm start` - Run dev server with hot reload
- `npm run build` - Build static site to `_site/`
- `npm run clean` - Empty `_site/` directory

## Architecture

This is an Eleventy v3 static site for TidyTuesday data visualizations.

### Directory Structure

- `src/` - Source files (input directory)
  - `_data/` - Global data files (YAML: site.yml, nav.yml) and chart CSV data
  - `_layouts/` - Nunjucks templates (base.njk → post.njk, page.njk)
  - `_includes/` - Reusable components
  - `css/` - Modular vanilla CSS with imports into style.css
  - `posts/` - Markdown posts with YAML frontmatter
  - `pages/` - Static pages
- `_site/` - Built output (generated)

### Key Patterns

**Posts:** Use `posts.11tydata.js` for computed data. URLs generated as `/{year}/week-{number}/` from frontmatter date and week fields.

**Charts:** Uses `eleventy-plugin-uncharted` for CSS-based charts from CSV data. Chart metadata defined in post frontmatter, rendered with `{% chart "chart-id" %}` shortcode. CSV files stored in `src/_data/charts/{date}/`.

**Plugin Source:** The uncharted plugin source is at `~/Developer/Eleventy/uncharted` and is npm linked to this project for local development.

**Date Filters:** Custom Luxon-based filters in eleventy.config.js: `readableDate`, `htmlDateString`, `isoDate`, `year`.

**Data Files:** YAML files in `_data/` available as template variables (e.g., `site.yml` → `site`).

### CSS Architecture

Vanilla CSS with semantic classes (no utilities). Organized as partials imported into `style.css`:
- `_variables.css` - Design tokens, colors use `light-dark()` for auto dark mode
- Component files: `_header.css`, `_footer.css`, `_post.css`, `_page.css`, `_post-list.css`
