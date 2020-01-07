export default [
  {
    path: '/',
    name: 'home',
    component: resolve => require(['@/views/home/index'], resolve),
    meta: { index: 0, requireAuth: false }
  }
]
