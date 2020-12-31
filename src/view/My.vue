<template>
  <div id="my">
    {{msg}}
    <!-- 菜单栏组件 -->
   <!-- <Footer :isChoose=[false,true,false,true,true,false,false,true]></Footer> -->
  </div>
</template>

<script>
  // import Footer from '../components/Footer.vue';
  export default {
 /*   components: {
      Footer,
    }, */
    name: 'My',
    data() {
      return {
        msg: 'My page'
      }
    }
  }
</script>

<style scoped>
  #my {
    font-weight: normal;
  }
</style>
