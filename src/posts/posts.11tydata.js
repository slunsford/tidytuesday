import { execSync } from "child_process";

function gitDate(inputPath, flag) {
  try {
    const result = execSync(
      `git log ${flag} --format=%cI -- "${inputPath}"`,
      { encoding: "utf8" }
    ).trim();
    if (!result) return null;
    const lines = result.split("\n").filter(Boolean);
    return flag === "--follow" ? lines.at(-1) : lines[0];
  } catch {
    return null;
  }
}

export default {
  layout: "post.njk",
  tags: ["posts"],
  eleventyComputed: {
    year: (data) => data.date?.getFullYear(),
    permalink: (data) => `/${data.date?.getFullYear()}/week-${data.week}/`,
    published: (data) => {
      if (data.published) return data.published;
      const inputPath = data.page?.inputPath;
      if (!inputPath) return null;
      const d = gitDate(inputPath, "--follow");
      return d ? new Date(d) : new Date();
    },
    updated: (data) => {
      const inputPath = data.page?.inputPath;
      if (!inputPath) return null;
      const d = gitDate(inputPath, "-1");
      return d ? new Date(d) : new Date();
    },
  }
};
