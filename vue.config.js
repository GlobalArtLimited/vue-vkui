module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  devServer: {
    public: 'pc1.globalag.ru'
  },
  configureWebpack: {
    externals: (process.env.NODE_ENV === 'production') ? {
      moment: 'moment',
      'velocity-animate': 'velocity-animate'
    } : {}
  }
}
