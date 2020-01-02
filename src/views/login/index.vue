<template>
  <div class="login">
    <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
    </van-cell-group>
    <van-button type="primary" size="large" @click="login">登录</van-button>
  </div>
</template>

<script>
import util from '@/common/utils'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      await util.saveUserInfo({
        username: this.username,
        password: this.password
      })
      this.$router.push(this.$route.query.redirect)
    }
  }
}
</script>
