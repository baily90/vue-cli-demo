<template>
  <div class="idCard">
    <comp-header :isShowBack="true"/>
    <van-cell-group>
      <van-field v-model="idCard" center clearable type="number" :autofocus="true" :maxlength="18" placeholder="请输入身份证号">
        <van-button slot="button" size="small" type="primary" @click="getIdCardInfo">查询</van-button>
      </van-field>
    </van-cell-group>
    <van-divider v-if="res" dashed>查询结果</van-divider>
    <van-cell-group v-if="res">
      <van-cell title="身份证号" :value="idCard" />
      <van-cell title="性别" :value="res.sex" />
      <van-cell title="出生日期" :value="res.birth" />
      <van-cell title="其他信息" :value="`${res.city}${res.town}${res.area}`" />
    </van-cell-group>
  </div>
</template>

<script>
import { getIdCardInfoService } from '@/service/idCard'
const idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
export default {
  name: 'idCard',
  data () {
    return {
      idCard: '',
      res: ''
    }
  },
  methods: {
    async getIdCardInfo () {
      try {
        if (!this.idCard) {
          this.$toast('请输入身份证号')
          return
        }
        if (!idcardReg.test(this.idCard)) {
          this.$toast('非法的身份证号')
          return
        }
        // sex: "男"
        // birth: "1990年12月20日"
        // city: ""
        // town: ""
        // area: ""
        const { result } = await getIdCardInfoService({ appkey: 'f7faa6f161909c09', idcard: this.idCard })
        this.res = result
      } catch (error) {}
    }
  }
}
</script>
