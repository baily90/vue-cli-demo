<template>
  <div class="compHeader">
    <van-sticky>
      <header v-if="!isWX">
        <div class="area area-back" @click="$router.back()" v-if="isShowBack">
          <van-icon name="arrow-left" size="22"/>
        </div>
        <div class="area slot-title">
          <slot>{{($route.meta && $route.meta.title) || '百里小站'}}</slot>
        </div>
      </header>
    </van-sticky>
  </div>
</template>
<script>
export default {
  name: 'compHeader',
  props: ['isShowBack'],
  data () {
    return {
      isWX: true
    }
  },
  created () {
    const ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) !== 'micromessenger') {
      this.isWX = false
    }
  }
}
</script>
<style lang="less" scoped>
header {
  position: relative;
  width: 100%;
  height: 44px;
  .area {
    position: absolute;
    height: 44px;
    &.slot-title {
      left: 50%;
      bottom: 0;
      max-width: 60%;
      transform: translate3d(-50%, 0, 0);
      text-align: center;
      line-height: 44px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 18px;
      font-weight: bold;
    }
    &.area-back {
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
