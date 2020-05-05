<template>
  <div class="home">
    <comp-header :isShowBack="false"/>
    <van-swipe :autoplay="5000" :height="200">
      <van-swipe-item>
        <img :src="bannerImg" />
      </van-swipe-item>
    </van-swipe>
    <van-divider dashed>功能区</van-divider>
    <van-grid :column-num="3">
      <van-grid-item icon="idcard" text="身份证号码查询" @click="go2IdCard"/>
      <van-grid-item icon="phone-o" text="手机号码归属地" @click="go2Phone"/>
      <van-grid-item icon="logistics" text="火车查询" @click="$toast('暂未开放')"/>
      <van-grid-item icon="cluster-o  " text="快递查询" @click="$toast('暂未开放')"/>
      <van-grid-item icon="chart-trending-o" text="彩票开奖查询" @click="go2Lottery"/>
      <van-grid-item icon="debit-pay" text="银行卡归属地查询" @click="$toast('暂未开放')"/>
    </van-grid>
  </div>
</template>

<script>
// import { getHomeInfo } from '@/service/home'
export default {
  name: 'home',
  data () {
    return {
      bannerImg: require('@/assets/imgs/newYear.jpg')
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      console.log('当前环境：' + process.env)
      // this.getHomeInfo()
    },
    async getHomeInfo () {
      try {
        // const { data } = await getHomeInfo()
        // console.log(data)
      } catch (error) {}
    },
    go2IdCard () {
      this.$router.push({ path: '/idCard' })
    },
    go2Phone () {
      this.$router.push({ path: '/phone' })
    },
    go2Lottery () {
      this.$router.push({ path: '/lottery' })
    },
    onClickLeft () {
      alert('11')
    }
  }
}
</script>
