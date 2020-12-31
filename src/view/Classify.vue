<template>
  <div id="classify">
    {{msg}}
    <!-- 菜单栏组件 -->
    <!-- <Footer :isChoose=[false,true,false,true,true,false,false,true]></Footer> -->
  </div>
</template>

<script>
  // import Footer from '../components/Footer.vue'
  export default {
  /*  components: {
      Footer,
    }, */
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
