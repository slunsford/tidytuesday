import { DateTime } from "luxon";
import yaml from "js-yaml";
import uncharted from "eleventy-plugin-uncharted";

export default function(eleventyConfig) {
  // Uncharted plugin for charts
  eleventyConfig.addPlugin(uncharted, {
    animate: true
  });

  // YAML data file support
  eleventyConfig.addDataExtension("yml, yaml", contents => yaml.load(contents));

  // Date filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLLL d, yyyy");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
  });

  // Shortcodes
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/assets");

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
