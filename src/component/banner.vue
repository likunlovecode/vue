<template>
    <div class="box">
         <ul class="indexNav">
      <li class="in1 fl">
       <router-link to="zhaipei">
        <strong class="fl">宅配<br />套餐</strong>
        <img src="../assets/images/icon1.png" class="fr" />
       </router-link>
      </li>
      <li class="in2 fr">
       <router-link to="zhaipei">
        <strong class="fl">农场特供</strong>
        <img src="../assets/images/icon2.png" class="fr" />
       </router-link>
      </li>
      <div class="clearfix"></div>
     </ul><!--indexNav/-->
     <!--<ul class="indexNav">
      <li class="in3 fl"><a href="zhaipei.html">今日菜谱</a></li>
      <li class="in3 fl"><a href="zhaipei.html">今日特价</a></li>
      <li class="in3 fl"><a href="zhaipei.html">最新活动</a></li>
      <div class="clearfix"></div>
     </ul>indexNav/-->
     <ul class="indexNav">
      <li class="in1 fr">
       <router-link to="zhaipei" style="padding:0; background:url(../src/assets/images/boluo.jpg) right bottom no-repeat;">
       </router-link>
      </li>
      <li class="in2 fl">
       <router-link to="zhaipei">
        <strong class="fl">卡券专区</strong>
        <img src="../assets/images/icon3.png" class="fr" />
       </router-link>
      </li>
      <div class="clearfix"></div>
     </ul><!--indexNav/-->
     <ul class="indexNav">
      <li class="in4 fl"><router-link to="about"><img src="../assets/images/icon4.png"/> 我的农场</router-link></li>
      <li class="in4 fl"><router-link to="news"><img src="../assets/images/icon5.png"/> 养生专家</router-link></li>
      <li class="in4 fl"><router-link to="contact"><img src="../assets/images/icon6.png"/> 走进农场</router-link></li>
      <div class="clearfix"></div>
     </ul><!--indexNav/-->
    </div>
</template>
<style>
.indexNav li{padding:2px;}
.indexNav li a{ display:block;color:#fff;width:100%;}
.indexNav li a:hover{ background:#f60;}
.indexNav .in1{
	width:33.33%;
	height:135px;
	}
.indexNav .in1 a{
	height:135px;
	background:#bfcf6c;
	padding:18% 5%;
	font-size:2.2rem;
	 }
.indexNav .in1 a strong{
	padding:1rem 0 0 0;
	
	font-weight:400;
	}
.indexNav .in2{width:66.66%;}
.indexNav .in2 a{
	height:135px;
	background:#7cbb46;
	padding:7% 15%;
	font-size:2.2rem;
	}
.indexNav .in2 a strong{
	font-weight:400;
	text-align:right;
	padding:2rem 0 0 0;
	}
.indexNav .in3{
	width:33.33%;
	height:65px;
	}
.indexNav .in3 a{
	height:61px;
	line-height:61px;
	font-size:2rem;
	background:#00b150;
	text-align:center;
	}
.indexNav .in4{
	width:33.33%;
	height:65px;
	}
.indexNav .in4 a{
	height:61px;
	line-height:61px;
	font-size:2rem;
	background:#0c7052;
	text-align:center;
	}
.indexNav .in4 a img{margin-right:5px;}
</style>

