var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
  // use for vector:src
  vector: 'src',
  // img:src & image:xlink:href url transform (vue default)
  // https://github.com/vuejs/vue-loader/blob/master/docs/en/options.md
  img: 'src', image: 'xlink:href'
}
}
