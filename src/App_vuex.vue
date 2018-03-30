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
// import home from './component/home';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    swiper,banner,footbar
  }
}
</script>
<style>
@import './assets/css/style.css';
/* @import './assets/css/bootstrap.min.css'; */
@import './assets/css/response.css';
</style>


