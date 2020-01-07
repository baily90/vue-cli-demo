<template>
  <div class="idCard">
    <van-cell-group>
      <van-field v-model="idCard" center clearable type="number" :autofocus="true" :maxlength="18" placeholder="请输入身份证号">
        <van-button slot="button" size="small" type="primary" @click="getIdCardInfo">查询</van-button>
      </van-field>
    </van-cell-group>
    <van-divider dashed>查询结果</van-divider>
    {{res}}
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
        // {
        //   'status': '0',
        //   'msg': 'ok',
        //   'result': {
        //     'province': '河南省',
        //     'city': '周口市',
        //     'town': '鹿邑县',
        //     'lastflag': '0',
        //     'sex': '男',
        //     'birth': '1980年01月02日'
        //   }
        // }
        const data = await getIdCardInfoService({ appkey: 'f7faa6f161909c09', idcard: this.idCard })
        this.res = data && JSON.stringify(data)
      } catch (error) {}
    }
  }
}
</script>
