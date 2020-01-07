module.exports = {
  devServer: {
    port: '8888'
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 prefetch 插件
    config.plugins.delete('preload')
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
