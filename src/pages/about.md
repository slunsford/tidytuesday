---
title: About
---

This site is my (new) home for data visualizations from [TidyTuesday](https://github.com/rfordatascience/tidytuesday), a weekly data project from the R4DS Online Learning Community.

Each week, a new dataset is posted and participants create visualizations to explore the data. I will almost certainly not publish every week, but when I do, I'll put them here.

This new site is built on [Eleventy](https://www.11ty.dev/) and using [Uncharted](https://github.com/slunsford/eleventy-plugin-uncharted), an Eleventy plugin I'm developing for generating charts in CSS from CSV data. While my [old site](https://tidytuesday2025.seanlunsford.com/), using [Evidence](https://evidence.dev/), ran [DuckDB](https://duckdb.org/) under the hood to generate charts from inline SQL, here I just use DuckDB locally to transform the data and generate a CSV, which I can upload here. As before, I include the queries I use for transforming the data and generating the charts in each post.
