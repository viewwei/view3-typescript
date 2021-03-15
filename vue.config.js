const path = require('path')
const port = process.env.port || 9527
// const zipPlugin = require('./src/webpackPlugin/zip')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        before:require("./src/mock/index") 
    },
    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableLegacy: true,
        runtimeOnly: false,
        compositionOnly: true,
        fullInstall: true
      }
    },
    chainWebpack (config) {
       // set svg-sprite-loader
    config.module
    .rule('svg')
    .exclude.add(resolve('src/icons'))
    .end()
  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
    .end()
    }
}
