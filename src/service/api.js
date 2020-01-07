const HOST = process.env === 'development' ? 'http://10.12.211.45:9999/api' : 'http://10.12.211.45:9999/api'
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
