import Api from './../api'
import http from '@/common/http'
export function getHomeInfo () {
  return http.get(Api.home.getHomeInfo)
}
