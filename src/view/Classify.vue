<template>
  <div id="classify">
    {{msg}}
    <Footer :isChoose=[false,true,true,false,false,true,false,true]></Footer>
  </div>
</template>

<script>
  import Footer from '../components/Footer.vue'
  export default {
    components:{
      Footer,
    },
    name: 'Classify',
    data() {
      return {
        msg: 'Classify page'
      }
    }
  }
</script>

<style scoped>
  #classify {
    font-weight: normal;
  }
</style>
