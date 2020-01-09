export default [
  {
    path: '/lottery',
    name: 'lottery',
    component: resolve => require(['@/views/lottery/index'], resolve),
    meta: { index: 1, title: '彩票开奖查询' }
  }
]
