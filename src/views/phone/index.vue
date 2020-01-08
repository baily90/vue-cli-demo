<template>
  <div class="phone">
    <comp-header :isShowBack="true" />
    <van-cell-group>
      <van-field
        v-model="phoneNum"
        center
        clearable
        type="number"
        :maxlength="11"
        placeholder="请输入手机号"
      >
        <van-button slot="button" size="small" type="primary" @click="getPhoneInfo">查询</van-button>
      </van-field>
    </van-cell-group>
    <van-divider v-if="res" dashed>查询结果</van-divider>
    <van-cell-group v-if="res">
      <van-cell title="手机号" :value="res.shouji" />
      <van-cell title="运营商" :value="res.company" />
      <van-cell title="其他信息" :value="`${res.province}${res.city}(${res.areacode})`" />
    </van-cell-group>
  </div>
</template>

<script>
import { getPhoneInfoService } from '@/service/phone'
const phoneNumReg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
export default {
  name: 'phone',
  data () {
    return {
      phoneNum: '',
      res: ''
    }
  },
  methods: {
    async getPhoneInfo () {
      try {
        if (!this.phoneNum) {
          this.$toast('请输入手机号')
          return
        }
        if (!phoneNumReg.test(this.phoneNum)) {
          this.$toast('非法的手机号')
          return
        }
        // shouji: "18601733660"
        // province: ""
        // city: "上海"
        // company: "中国联通"
        // cardtype: null
        // areacode: "021"
        const { result } = await getPhoneInfoService({
          appkey: 'f7faa6f161909c09',
          shouji: this.phoneNum
        })
        this.res = result
      } catch (error) {}
    }
  }
}
</script>
