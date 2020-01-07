export default [
  {
    path: '/idCard',
    name: 'idCard',
    component: resolve => require(['@/views/idCard/index'], resolve),
    meta: { index: 1, requireAuth: false }
  }
]
