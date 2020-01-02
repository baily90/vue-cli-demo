/* eslint-disable no-undef */
import util from '@/common/utils'
Vue.use(VueRouter)

// automatic context all page router
let routes = []
const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(router => {
  if (router.indexOf('./index') === 0) {
    return false
  }
  const routerModule = routerContext(router)
  routes = [...routes, ...(routerModule.default || routerModule)]
})

const router = new VueRouter({
  routes
})

// 路由守卫，设置title、检查页面是否需要登录
router.beforeEach((to, from, next) => {
  util.setTitle(to.meta.title)
  window.scrollTo(0, 0)
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!util.isLogin()) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
