/* eslint-disable no-useless-escape */
let modules = {}
const modulesContext = require.context('./modules', true, /\.js$/)
modulesContext.keys().forEach(module => {
  const mo = modulesContext(module)
  if (module === './index.js') return false
  const reg = /(^([^\/]*\/)|(^\/))([^\/]+)\/.*$/ig
  const moduleName = module.replace(reg, '$4')
  modules[moduleName] = {
    namespaced: true,
    ...(mo.default || mo)
  }
})

export default modules
