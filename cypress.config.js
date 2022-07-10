const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    // baseUrl: 'http://localhost:8080/',
    baseUrl : 'https://littleui-app-git-master-thanthtetzin.vercel.app/',
  },
})
