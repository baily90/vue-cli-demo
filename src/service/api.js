const HOST = process.env.NODE_ENV === 'development' ? '/api' : 'http://49.235.174.250/api'
export default {
  home: {
    getHomeInfo: `${HOST}/getHomeInfo`
  },
  idCard: {
    getIdCardInfo: `${HOST}/idcard/query`
  },
  phone: {
    getPhoneInfo: `${HOST}/shouji/query`
  }
}
