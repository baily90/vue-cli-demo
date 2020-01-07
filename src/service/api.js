const HOST = process.env.NODE_ENV === 'development' ? '/api' : 'http://172.17.0.14/api'
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
