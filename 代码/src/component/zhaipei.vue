<template>
  <div class="box">
      <div class="content">
     
     <h3 class="title">宅配套餐</h3>
     <div class="zhai">
      <dl>
       <dt><router-link to="proinfo"><img src="../assets/images/zhai1.jpg" width="65" height="58" /></router-link></dt>
       <dd>
        <h3><router-link to="proinfo">6斤有机蔬菜箱</router-link></h3>
        <p>小贝壳素材农庄精选3KG有机蔬菜，只为您及家人的安心、美味</p>
       </dd>
       <div class="clearfix"></div>
      </dl>
      <dl>
       <dt><router-link to="proinfo"><img src="../assets/images/zhai1.jpg" width="65" height="58" /></router-link></dt>
       <dd>
        <h3><router-link to="proinfo">21斤蔬菜蛋米箱</router-link></h3>
        <p>小贝壳素材农庄精选3KG有机蔬菜，只为您及家人的安心、美味</p>
       </dd>
       <div class="clearfix"></div>
      </dl>
      <dl>
       <dt><a href="proinfo.html"><img src="../assets/images/zhai1.jpg" width="65" height="58" /></a></dt>
       <dd>
        <h3><a href="proinfo.html">12斤有机蔬菜箱</a></h3>
        <p>小贝壳素材农庄精选3KG有机蔬菜，只为您及家人的安心、美味</p>
       </dd>
       <div class="clearfix"></div>
      </dl>
     </div><!--zhai/-->
     <h3 class="title">有机食材</h3>
     <div class="zhai">
      <dl>
       <dt><a href="proinfo.html"><img src="../assets/images/zhai1.jpg" width="65" height="58" /></a></dt>
       <dd>
        <h3><a href="proinfo.html">时令果蔬</a></h3>
        <p>小贝壳素材农庄精选3KG有机蔬菜，只为您及家人的安心、美味</p>
       </dd>
       <div class="clearfix"></div>
      </dl>
     </div><!--zhai/-->
     <h3 class="title2">时令果蔬<a href="zhaipeiinfo.html">更多</a></h3>
     <div class="zhai2">
      <dl>
       <dt><a href="proinfo.html"><img src="../assets/images/z1.jpg" /></a></dt>
       <dd>
        <h3><a href="proinfo.html">小贝壳素材农庄有机毛豆500g</a></h3>
        <p>富含纤维素，平衡每日膳食</p>
        <h4>¥14.40</h4>
       </dd>
      </dl>
      <dl>
       <dt><a href="proinfo.html"><img src="../assets/images/z2.jpg" /></a></dt>
       <dd>
        <h3><a href="proinfo.html">小贝壳素材农庄有机毛豆500g</a></h3>
        <p>有机种植，风味独特，清热解暑，营养丰富</p>
        <h4>¥14.40</h4>
       </dd>
      </dl>
      <div class="clearfix"></div>
     </div><!--zhai2/-->
     <div class="zhai">
      <dl>
       <dt><a href="proinfo.html"><img src="../assets/images/zhai1.jpg" width="65" height="58" /></a></dt>
       <dd>
        <h3><a href="proinfo.html">肉禽蛋奶</a></h3>
        <p>肉类、禽类、蛋类</p>
       </dd>
       <div class="clearfix"></div>
      </dl>
     </div><!--zhai/-->
     <h3 class="title">卡券专区</h3>
     <div class="zhai">
      <dl>
       <dt><a href="proinfo.html"><img src="../assets/images/zhai1.jpg" width="65" height="58" /></a></dt>
       <dd>
        <h3><a href="proinfo.html">套餐卡</a></h3>
        <p>月度套餐卡A、月度套餐卡B、季度套餐卡A、季度套餐卡B、半年套餐卡A、半年套餐卡B</p>
       </dd>
       <div class="clearfix"></div>
      </dl>
      <dl>
       <dt><a href="proinfo.html"><img src="../assets/images/zhai1.jpg" width="65" height="58" /></a></dt>
       <dd>
        <h3><a href="proinfo.html">健康礼券</a></h3>
        <p>有机健康体验150礼券、正能量518礼券、正能量998礼券、有机乐活礼券</p>
       </dd>
       <div class="clearfix"></div>
      </dl>
      <dl>
       <dt><a href="proinfo.html"><img src="../assets/images/zhai1.jpg" width="65" height="58" /></a></dt>
       <dd>
        <h3><a href="proinfo.html">精品礼盒</a></h3>
        <p>正能量518礼盒、正能量998礼盒、有机健康体验150礼盒</p>
       </dd>
       <div class="clearfix"></div>
      </dl>
     </div><!--zhai/-->
    </div><!--content-->
    
    <div class="height1"></div>
    <div class="footNav">
     <dl>
      <a href="index.html">
       <dt><span class="glyphicon glyphicon-home"></span></dt>
       <dd>首页</dd>
      </a>
     </dl>
     <dl>
      <a href="tel:021-60521286">
       <dt><span class="glyphicon glyphicon-earphone"></span></dt>
       <dd>电话</dd>
      </a>
     </dl>
     <dl>
      <router-link href="javascript:;" to="car">
       <dt><span class="glyphicon glyphicon-shopping-cart"></span></dt>
       <dd>购物车</dd>
      </router-link>
     </dl>
     <dl>
      <router-link href="javascript:;" to="user">
       <dt><span class="glyphicon glyphicon-user"></span></dt>
       <dd>会员</dd>
      </router-link>
     </dl>
    </div>
  </div>
</template>
<style>

</style>
<script>
import $ from '../assets/js/jquery.min.js';
import Swiper from '../assets/js/swiper.min.js';
export default {
    mounted(){
        var mySwiper=new Swiper(('.swiper-container'),{
        auto:2000,
        continuous:true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
        el: '.swiper-pagination',
        },
        stopPropation:true,
         })
      
    }
}
</script>
<style>
.reg-login{
	padding:20px 0 0 0;
	}
.reg-login h3{
	font-size:1.4rem;
	height:30px;
	line-height:30px;	
	}
.lrBox{
	padding:0 8px;
	background:#fff;
	}
.lrBox input,.lrBox select{
	border:0;
	padding:0;
	margin:0;
	height:45px;
	line-height:45px;
	background:none;
	}
.lrList{border-bottom:#ddd 1px solid;}
.lrList input,.lrBox select{
	width:100%;
	}
.lrBox select{ color:#A9A9A9;}
.lrList2{
	border-bottom:#ddd 1px solid;
	height:46px;
	}
.lrList2 input{
	float:left;
	width:70%;
	}
.lrList2 button{
	float:right;
	border:0;
	padding:0;
	margin:0;
	margin:3px 0;
	width:28%;
	height:38px;
	line-height:38px;
	background:#5ea626;
	color:#fff;
	-moz-border-radius: 4px;      /* Gecko browsers */
    -webkit-border-radius: 4px;   /* Webkit browsers */
    border-radius:4px;            /* W3C syntax */
	}
.lrList2 button:hover,.lrSub input:hover,.lrSub a:hover{ background:#f60;}
.lrSub{
	padding:20px 10px;
	}
.lrSub input,.lrSub a{
	display:block;
	border:0;
	padding:0;
	margin:0;
	font-size:1.6rem;
	width:100%;
	height:40px;
	line-height:40px;
	text-align:center;
	background:#5ea626;
	color:#fff;
	-moz-border-radius: 4px;      /* Gecko browsers */
    -webkit-border-radius: 4px;   /* Webkit browsers */
    border-radius:4px;            /* W3*/
    };

</style>


