const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("compiled");
  eleventyConfig.addPassthroughCopy("previews");

  return {
    dir: {
      input: "views",
      output: "dist"
    }
  }
};
