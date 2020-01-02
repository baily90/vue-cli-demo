<template>
  <div class="home">
    home
  </div>
</template>

<script>
import { getHomeInfo } from '@/service/home'
export default {
  name: 'home',
  created () {
    // this.init()
  },
  methods: {
    init () {
      this.getHomeInfo()
    },
    async getHomeInfo () {
      try {
        const { data } = await getHomeInfo()
        console.log(data)
      } catch (error) {

      }
    }
  }
}
</script>
