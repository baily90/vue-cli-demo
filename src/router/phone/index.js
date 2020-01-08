export default [
  {
    path: '/phone',
    name: 'phone',
    component: resolve => require(['@/views/phone/index'], resolve),
    meta: { index: 1, title: '手机号码归属地查询' }
  }
]
