import { execSync } from "child_process";

export default {
  layout: "post.njk",
  tags: ["posts"],
  eleventyComputed: {
    year: (data) => data.date?.getFullYear(),
    permalink: (data) => `/${data.date?.getFullYear()}/week-${data.week}/`,
    updated: (data) => {
      const inputPath = data.page?.inputPath;
      if (!inputPath) return null;

      let gitDate = null;
      try {
        const result = execSync(
          `git log -1 --format=%cI -- "${inputPath}"`,
          { encoding: "utf8" }
        ).trim();
        if (result) gitDate = new Date(result);
      } catch {
        // ignore git errors
      }

      const published = data.published ? new Date(data.published) : null;

      // Return the later of gitDate or published
      if (gitDate && published) {
        return (gitDate > published ? gitDate : published).toISOString();
      }
      return gitDate?.toISOString() || published?.toISOString() || null;
    }
  }
};
