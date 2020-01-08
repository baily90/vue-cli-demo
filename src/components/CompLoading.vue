<template>
  <div class="loading">
    <van-overlay :show="isShow">
      <van-loading type="spinner" />
    </van-overlay>
  </div>
</template>
<script>
export default {
  name: 'loading',
  data () {
    return {
      isShow: false
    }
  }
}
</script>
