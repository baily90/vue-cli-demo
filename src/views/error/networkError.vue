<template>
  <div class="networkError">
    networkError
    <van-button round type="info" @click="onRefresh">点我刷新</van-button>
  </div>
</template>

<script>

export default {
  name: 'networkError',
  methods: {
    onRefresh () {
      this.$router.go(-1)// 返回之前点击的页面
    }
  }
}
</script>
