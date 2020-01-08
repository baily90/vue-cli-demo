<template>
  <div class="loading">
    <van-overlay :show="isShow" class-name="overLay">
      <div class="loading-content">
        <van-loading type="spinner" vertical>加载中...</van-loading>
      </div>
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
<style lang="less" scoped>
.overLay {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  .loading-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: rgba(0, 0, 0, .7);
    border-radius: 10px;
  }
}
</style>
