const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:`/cinephile/`,
  transpileDependencies: true,
  css:{
    sourceMap: true
  },
  productionSourceMap: false
})
