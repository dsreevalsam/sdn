const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "env": {
      "baseUrl": "https://link.springer.com",
      "advancedSearchUrl": "https://link.springer.com/advanced-search"
    }
  },
});
