export default {
  layout: "post.njk",
  tags: ["posts"],
  ...(process.env.NODE_ENV === "production" && {
    published: "git Created",
    updated: "git Last Modified",
  }),
  eleventyComputed: {
    year: (data) => data.date?.getFullYear(),
    permalink: (data) => `/${data.date?.getFullYear()}/week-${data.week}/`,
  }
};
