const { defineConfig } = require('cypress');
const allureWriter = require("@shelex/cypress-allure-plugin/writer")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
       //implement node event listeners here

      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });
      return config;
    },
    env: {
      allure: true
    }
  },
});
