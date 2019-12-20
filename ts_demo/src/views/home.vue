<template>
  <div class="home">
    HOME-DASHBOARD 页
  </div>
</template>

<script>

export default {
  name: 'dashboard',
  data(){
    return{
      
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.home{
  height: calc(100% - #{$headNavHeight});
}
</style>
