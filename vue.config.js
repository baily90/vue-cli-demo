module.exports = {
  devServer: {
    port: '8888'
  },
  configureWebpack: config => {
    // externals里的模块不打包
    Object.assign(config, {
      externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        vant: 'vant',
        axios: 'axios'
      }
    })
  }
}
