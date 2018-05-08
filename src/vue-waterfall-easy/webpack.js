var path = require('path')
module.exports = {
  entry: path.resolve(__dirname, 'vue-waterfall-easy.vue/test.vue'),
  output: {
    path: path.resolve(__dirname, 'script'),
    filename: 'bundle.js',
    libraryTarget:'umd',
    library: 'test',
    libraryExport: "default" // 不设置此项目，那么只能test.default中访问
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ]
  }
};
