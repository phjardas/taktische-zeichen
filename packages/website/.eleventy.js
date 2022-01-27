module.exports = function(eleventyConfig) {
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
