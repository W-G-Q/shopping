<template>
  <div id="app">
    <router-view/>
    <!-- 菜单栏组件 -->
    <Footer :isChoose=[false,true,false,true,true,false,false,true]></Footer>
  </div>
</template>

<script>
  import Footer from './components/Footer.vue';
  export default {
    name: 'App',
    components:{
      Footer,
    },
    created(){
    this.$router.replace({ path:'/' })
    }
  }
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
  body{
    padding: 0;
    margin: 0;
    background-color: #f5f5f5;
  }
</style>
