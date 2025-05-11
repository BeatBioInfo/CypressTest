
  const { defineConfig } = require('cypress');
  
  module.exports = defineConfig({
      e2e: {
          baseUrl: 'https://staging.trymima.com/',
          experimentalWebKitSupport: true,
          watchForFileChanges: false,
          viewportHeight: 960,
          viewportWidth: 1500,
          failonStatusCode: false,
          chromeWebSecurity: false,
          includeShadowDom: true,
          setupNodeEvents(on, config) {
            // implement node event listeners here
          },
      },
  });
      