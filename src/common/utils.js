const LOGIN_INFO = 'vue-cli-demo-user-info'

export default {
  /**
   * 用户是否已经登录， true ： 已登录 , false ： 未登录
   */
  isLogin () {
    return !!this.queryUserInfo()
  },
  /**
   * 设置页面标题
   * @param {string} title
   */
  setTitle (title) {
    document.title = title || 'vue-cli-demo'
  },
  /**
   * 保存用户信息
   * @param {object} userInfo
   */
  saveUserInfo (userInfo) {
    return new Promise(resolve => {
      localStorage.setItem(LOGIN_INFO, JSON.stringify(userInfo))
      resolve()
    })
  },
  /**
   * 获取用户信息
   */
  queryUserInfo () {
    return localStorage.getItem(LOGIN_INFO) && JSON.parse(localStorage.getItem(LOGIN_INFO))
  }
}
