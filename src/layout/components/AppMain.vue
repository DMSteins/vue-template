<template>
  <section class="app-main page-container">
    <!-- <transition name="fade-transform" mode="out-in"> -->
      <router-view :key="key" />
    <!-- </transition> -->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  padding-top: $headerH;
  /*50 = navbar  */
  min-height: calc(100vh - #{$footerH});
  position: relative;
  overflow: hidden;
}
</style>
