module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/shoping-cart/'
    : '/',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
}
