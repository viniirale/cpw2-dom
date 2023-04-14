const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    "experimentalStudio" : true,
    "video" : false,
    "supportFile" : false
  },
})