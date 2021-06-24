<template>
  <div class="app-footer">
    <div class="container page-container flex flex-align-center flex-pack-center">
      <div class="copyright">
        footer
      </div>
    </div>
    
  </div>
</template>

<script>


export default {
  components: {
  
  },
  computed: {
   
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.app-footer{
  background-color: #eeeeee;
  height: $footerH;
  overflow: hidden;
  position: relative;

  .container{
    height: 100%;
  }

  .copyright{
    font-size: 0.8rem;
    color: #8a8a8a;
  }
}
</style>
