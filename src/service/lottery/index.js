import Api from './../api'
import http from '@/common/http'
export function getLotteryInfoService (params) {
  return http.get(Api.lottery.getLotteryInfo, params)
}
