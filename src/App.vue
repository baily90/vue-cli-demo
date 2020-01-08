<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="routerClass"/>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态,如果直接刷新不做动画
      if (from.meta.index == undefined) {
        this.transitionName = ''
        return
      }
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>
<style lang="less">
.routerClass{
  position: absolute;
  width: 100%;
  transition: all ease 250ms;
}
.slide-left-enter,
.slide-right-leave-active{
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter{
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
