import home from './component/home.vue'
import success from './component/success.vue'
import pay from './component/pay.vue'
import car from './component/car.vue'
import jixu from './component/jixu.vue'
import login from './component/login.vue'
import reg from './component/reg.vue'
import user from './component/user.vue'
import proinfo from './component/proinfo.vue'
import zhaipei from './component/zhaipei.vue'
import contact from './component/contact.vue'
import news from './component/news.vue'
import about from './component/about.vue'



// 配置路由
let routes=[
  {path:'/home',component:home},
  {path:'/pay',component:pay},
  {path:'/car',component:car},
  {path:'/user',component:user},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/success',component:success},
  {path:'/jixu',component:jixu},
  {path:'/zhaipei',component:zhaipei},
  {path:'/contact',component:contact},
  {path:'/news',component:news},
  {path:'/about',component:about},
  {path:'/proinfo',component:proinfo},
  // {path:'/detail/:aid',component:detail},
  /* {path:'/detail',component:detail,children:[
    {path:':aid',component:detail}
  ]}, */
  {path:'/',redirect:'/home'},//路由跳转
  // {path:'*',component:error}
];

export default {
  routes:routes
};