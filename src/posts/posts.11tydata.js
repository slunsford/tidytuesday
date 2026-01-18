export default {
  layout: "post.njk",
  tags: ["posts"],
  eleventyComputed: {
    year: (data) => data.date?.getFullYear(),
    permalink: (data) => `/${data.date?.getFullYear()}/week-${data.week}/`
  }
};
