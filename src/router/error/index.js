export default [
  {
    path: '/networkError',
    name: 'networkError',
    component: resolve => require(['@/views/error/networkError'], resolve),
    meta: { index: 30 }
  },
  {
    path: '*',
    name: '404',
    component: resolve => require(['@/views/error/404'], resolve),
    meta: { index: 20 }
  }
]
