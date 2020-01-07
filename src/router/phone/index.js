export default [
  {
    path: '/phone',
    name: 'phone',
    component: resolve => require(['@/views/phone/index'], resolve),
    meta: { index: 1 }
  }
]
