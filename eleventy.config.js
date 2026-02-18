import { DateTime } from "luxon";
import yaml from "js-yaml";
import uncharted from "eleventy-plugin-uncharted";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginRss from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
  // Uncharted plugin for charts
  eleventyConfig.addPlugin(uncharted, {
    dataDir: 'src/_data/charts',
    animate: true,
    downloadData: true,
    dataPassthrough: true,
    image: {
      enabled: true,
      outputDir: '/images/charts/',
      width: 800,
      height: 500,
      scale: 2,
      background: '#f5f5f5',
      stylesheets: [
        'node_modules/@fortawesome/fontawesome-pro/css/fontawesome.min.css',
        'node_modules/@fortawesome/fontawesome-pro/css/solid.min.css',
        'src/css/_charts.css'
      ]
    }
  });

  // Syntax highlighting for code blocks
  eleventyConfig.addPlugin(syntaxHighlight, {
    preAttributes: { tabindex: 0 }
  });

  // RSS feed
  eleventyConfig.addPlugin(pluginRss);

  // Smart typography (curly quotes, em dashes, etc.)
  eleventyConfig.amendLibrary("md", mdLib => {
    mdLib.set({ typographer: true });
  });

  // YAML data file support
  eleventyConfig.addDataExtension("yml, yaml", contents => yaml.load(contents));

  // Date filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("d LLLL yyyy");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
  });

  eleventyConfig.addFilter("year", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy");
  });

  eleventyConfig.addFilter("shortDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("d LLL");
  });

  eleventyConfig.addFilter("firstChartId", (charts) => {
    if (!charts) return null;
    return Object.keys(charts)[0];
  });

  // Shortcodes
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

  // Passthrough copy for CSS
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
