module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

  return {
    dir: {
    input: "views",
    output: "dist"
    }
  }
};
