<template>
  <div id="index">
    {{msg}}
    <Footer :isChoose=[true,false,false,true,false,true,false,true]></Footer>
  </div>
</template>

<script>
  import Footer from '../components/Footer.vue'
  export default {
    components:{
      Footer,
    },
    name: 'Index',
    data() {
      return {
        msg: 'Index page'
      }
    }
  }
</script>

<style scoped>
  #index {
    font-weight: normal;
  }
</style>
