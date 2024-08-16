/****************
 * Filters {{{1 *
 ****************/
// First create constants that require() any packages we need
const countryEmoji = require('./src/filters/country-emoji.js');
const { DateTime } = require('luxon');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const EleventyFetch = require('@11ty/eleventy-fetch');
const { execSync } = require('child_process'); // Required by pageFind
const fs = require("fs");
const Image = require('@11ty/eleventy-img');
const nodePandoc = require('node-pandoc');
const path = require('path');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const yaml = require('js-yaml');
/********************************
 * eleventyConfig function {{{1 *
 ********************************/
// Use module.exports to export a configuration funcion.
// This is a standard function in Node.js projects
module.exports = function(eleventyConfig) {
  // Run any code needed including built-in 11ty methods
 /*************************
  * Passthrough copy {{{2 *
  *************************/
  // Copy assets/ to _site/assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("src/media/*.jpg");
  eleventyConfig.addPassthroughCopy("src/dwg");
  eleventyConfig.addPassthroughCopy({ "node_modules/leaflet/dist": "assets/leaflet" });
	eleventyConfig.addPassthroughCopy({ "node_modules/jquery/dist": "assets/jquery/js" });
	eleventyConfig.addPassthroughCopy({ "node_modules/@knight-lab/timelinejs/dist": "assets/timelinejs" });
	eleventyConfig.addPassthroughCopy("src/.domains");
  eleventyConfig.addPassthroughCopy(".gitattributes");
  // emulate passthrough during --serve:
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
 /*****************
	* Markdown {{{2 *
	*****************/
  async function convertMarkdownToHtml(markdown, args) {
    return new Promise((resolve, reject) => {
      nodePandoc(markdown, '-d _data/defaults.yml', (err, result) => {
        if (err) {
          console.error(`Pandoc error: ${err.message}`);
          resolve(result);
        } else {
          resolve(result);
        }
      });
    });
  }
  eleventyConfig.setLibrary("md", {
    render: async function(content) {
      return await convertMarkdownToHtml(content);
    }
  });
 /*************************
  * Activate plugins {{{2 *
  *************************/
	// Call filters defined outside this function
  eleventyConfig.addFilter("dateFilter", (dateObj) => {
    return DateTime.fromJSDate(dateObj).setZone("utc").setLocale('pt').toLocaleString(DateTime.DATE_SHORT);
  });
	eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
  eleventyConfig.addFilter('countryEmoji', countryEmoji);
  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents));
  eleventyConfig.addPlugin(pluginRss, {
    posthtmlRenderOptions: {
      closingSingleTag: "slash"
    }
  });
  eleventyConfig.addFilter('yamlToJson', (value) => {
    const yaml = require('js-yaml');
    return JSON.stringify(yaml.load(value));
  });
  eleventyConfig.addDataExtension('yml, yaml', contents => yaml.load(contents));
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  //eleventyConfig.setQuietMode(true);
 /********************
  * Setup views {{{2 *
  ********************/
  eleventyConfig.addCollection("obras", function(collection) {
    return collection.getFilteredByGlob("src/civico/*.md");
  });
	eleventyConfig.addCollection('destaques', function(collection) {
    return sortByDisplayOrder(collection.getFilteredByGlob("src/civico/*.md")).filter(
			x => x.data.featured
		);
	});
 /***********************
  * Postprocessing {{{2 *
  ***********************/
  eleventyConfig.on('eleventy.after', () => {
    execSync(`npx pagefind --source _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
  })
 /***************
  * Return {{{2 *
  ***************/
  // If needed, return an object configuration
  return {
    dir: {
			htmlTemplateEngine: "njk",
			templateFormats: ["html", "liquid", "njk"],
      input: 'src',
      output: '_site',
      includes: '_includes'
    }
  }
};
// vim: foldmethod=indent shiftwidth=2 tabstop=2
