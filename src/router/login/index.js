export default [
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/views/login/index'], resolve),
    meta: { index: 10 }
  }
]
