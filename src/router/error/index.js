export default [
  {
    path: '/networkError',
    name: 'networkError',
    component: resolve => require(['@/views/error/networkError'], resolve)
  },
  {
    path: '*',
    name: '404',
    component: resolve => require(['@/views/error/404'], resolve)
  }
]
