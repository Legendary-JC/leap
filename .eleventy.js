// Eleventy configuration – LEAP Canada
module.exports = function (eleventyConfig) {
  // Copy static assets straight to the output folder
  eleventyConfig.addPassthroughCopy({ "src/css": "css", "src/js": "js" });
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    // Set PATH_PREFIX (e.g. "/leap/") when deploying to a sub-folder
    pathPrefix: process.env.PATH_PREFIX || "/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
