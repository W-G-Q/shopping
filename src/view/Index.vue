<template>
  <div id="index">
    {{msg}}
    <!-- 菜单栏组件 -->
    <Footer :isChoose=[false,true,false,true,true,false,false,true]></Footer>
  </div>
</template>

<script>
  import Footer from '../components/Footer.vue'
  export default {
    components: {
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
