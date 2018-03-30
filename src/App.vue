<template>
  <div id="app">
    <loading v-show="this.$root.$data.bLoading"></loading>
    <router-view></router-view>
    <!-- <footbar></footbar> -->
  </div>
</template>

<script>
import swiper from './component/swiper';
import banner from './component/banner';
import footbar from './component/footbar';
import {mapGetters} from 'vuex';
// import home from './component/home';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // watch:{
  //   $route(to){ //路由数据监听
  //     // console.log('目标路由',to)
  //     let path = to.path;//目标路由地址
  //     if(/home|user/.test(path)){
  //       this.$store.dispatch('showFoot');
  //     }
  //     if(/login|reg/.test(path)){
  //       this.$store.dispatch('hideFoot');
  //     }
  //     if(/user/.test(path)){
  //       this.$store.dispatch('showFoot');
  //     }
  //   }
  // },
  components:{
    footbar,swiper,banner
  },
  computed:mapGetters([
    'bFoot'
  ])
}
</script>
<style>
@import './assets/css/style.css';
/* @import './assets/css/bootstrap.min.css'; */
@import './assets/css/response.css';
</style>


