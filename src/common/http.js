/* eslint-disable no-undef */
import router from '@/router'
import axios from 'axios'
import QS from 'qs' // 用来序列化post类型的数据

// 导入vuex,要使用到里面的网络状态/token
import commonStore from '@/store/modules/common'

// 请求超时机制（5000ms）
axios.defaults.timeout = 5000

// 默认请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

let loading = null
// 请求拦截器
axios.interceptors.request.use(
  config => {
    loading = Vue.prototype.$loading
    loading.show()
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = commonStore.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (loading) {
      loading.hide()
      loading = null
    }
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      commonStore.commit('changeNetworkSuccess', true)
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    if (loading) {
      loading.hide()
      loading = null
    }
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围 errorHandle为解析错误码
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      Toast({
        message: '网络异常',
        duration: 1500,
        forbidClick: true
      })
      commonStore.commit('changeNetworkSuccess', false)
      router.push({ path: '/networkError' })
    }
  }
)

/**
* 请求失败后的错误统一处理
* @param {Number} status 请求失败的状态码
*/
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作。
    case 401:
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
      break
    // 403 token过期
    // 登录过期对用户进行提示
    // 清除本地token和清空vuex中token对象
    // 跳转登录页面
    case 403:
      Toast({
        message: '登录过期，请重新登录',
        duration: 1000,
        forbidClick: true
      })
      // 清除token
      localStorage.removeItem('token')
      // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
      setTimeout(() => {
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }, 1000)
      break
    // 404请求不存在
    case 404:
      Toast({
        message: '网络请求不存在',
        duration: 1500,
        forbidClick: true
      })
      break
    // 其他错误，直接抛出错误提示
    default:
      Toast({
        message: other,
        duration: 1500,
        forbidClick: true
      })
  }
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export default {
  get,
  post
}
