<template>
  <div class="lottery">
    <comp-header :isShowBack="true" />
    <van-cell-group>
      <van-field v-model="issueno" type="number" label="期号" placeholder="请输入期号，不填默认当期" />
      <van-field v-model="lotteryNum" center clearable type="number" placeholder="请输入彩票ID">
        <van-button slot="button" size="small" type="primary" @click="getLotteryInfo">查询</van-button>
      </van-field>
    </van-cell-group>
    <van-divider v-if="res" dashed>查询结果</van-divider>
    <van-cell-group v-if="res">
      <van-cell title="彩票ID" :value="res.caipiaoid" />
      <van-cell title="期号" :value="res.issueno" />
      <van-cell title="开奖号码" :value="res.number"/>
      <van-cell title="开奖日期" :value="res.opendate" />
      <van-cell title="兑奖截止日期" :value="res.deadline" />
      <van-cell title="销售额" :value="res.saleamount" />
      <van-cell title="奖池金额" :value="res.totalmoney" />
      <van-cell title="中奖情况" :value="(res.prize && res.prize.length) ? '恭喜，您中奖了' : '未中奖'" />
      <div class="prize-wrap" v-if="res.prize && res.prize.length">
        <div class="prize-header">
          <span>奖项</span>
          <span>中奖条件</span>
          <span>中奖人数</span>
          <span>单注金额</span>
        </div>
        <div
          v-for="(item, index) in res.prize"
          :key="index">
          <span>{{item.prizename}}</span>
          <span>{{item.require}}</span>
          <span>{{item.num}}</span>
          <span>{{item.singlebonus}}</span>
        </div>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import { getLotteryInfoService } from '@/service/lottery'
export default {
  name: 'phone',
  data () {
    return {
      lotteryNum: '', // 彩票号
      issueno: '', // 期号
      res: ''
    }
  },
  methods: {
    async getLotteryInfo () {
      try {
        if (!this.lotteryNum) {
          this.$toast('请输入彩票ID')
          return
        }
        const { result } = await getLotteryInfoService({
          appkey: 'f7faa6f161909c09',
          caipiaoid: this.lotteryNum,
          issueno: this.issueno
        })
        this.res = result
      } catch (error) {}
    }
  }
}
</script>
<style lang="less" scoped>
.prize-wrap {
  div {
    display: flex;
    padding: 10px 0;
    &.prize-header {
      font-weight: bold;
      span {
        font-size: 14px;
      }
    }
    span {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
  }

}
</style>
