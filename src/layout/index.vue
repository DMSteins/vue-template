<template>
  <div class="app-wrapper">
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import { AppHeader, AppFooter, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppFooter,
    AppMain
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
