const HOST = process.env === 'development' ? '' : ''
export default {
  home: {
    getHomeInfo: `${HOST}/getHomeInfo`
  }
}
