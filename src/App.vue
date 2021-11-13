<template>
  <div id="app">
    <layout-header/>
    <router-view/>
    <layout-footer/>
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

<style lang="sass">
@import '@/assets/style/main.sass';
</style>
