module.exports = function(eleventyConfig) {

    // Enable files in styles folder to be copied across.
    eleventyConfig.addPassthroughCopy('styles')
    return {
      passthroughFileCopy: true
    }
};