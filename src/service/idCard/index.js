import Api from './../api'
import http from '@/common/http'
export function getIdCardInfoService (params) {
  return http.get(Api.idCard.getIdCardInfo, params)
}
