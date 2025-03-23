const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://blog.agibank.com.br/',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
    },
    retries: {
      runMode: 2,
      openMode: 2,
    },
  },
  
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/report/mochawesome-report",
    "overwrite": false,
    "html": true,
    "json": true,
    "timestamp": "mmddyyyy_HHMMss",
    "reportTitle": "Agibank Test Suite",
    "cdn": true,
    "charts": true
  }
});
