import Api from './../api'
import http from '@/common/http'
export function getPhoneInfoService (params) {
  return http.get(Api.phone.getPhoneInfo, params)
}
