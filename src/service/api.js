const HOST = process.env.NODE_ENV === 'development' ? '/api' : 'http://www.baili.fun/api'
export default {
  home: {
    getHomeInfo: `${HOST}/getHomeInfo`
  },
  idCard: {
    getIdCardInfo: `${HOST}/idcard/query`
  },
  phone: {
    getPhoneInfo: `${HOST}/shouji/query`
  },
  lottery: {
    getLotteryInfo: `${HOST}/caipiao/query`
  }
}
