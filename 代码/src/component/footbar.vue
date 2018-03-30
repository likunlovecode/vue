<template>
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
       <dt><router-link class="glyphicon glyphicon-shopping-cart" to="car"></router-link></dt>
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
</template>
<style>
.footNav{
	position:fixed;
	left:0;
	bottom:0;
	width:100%;
	height:55px;
	background:#21292c;	
	}
.footNav dl{
	float:left;
	width:25%;
	text-align:center;
	}
.footNav dt{
	font-size:1.9rem;
	color:#8c8f94;
	height:30px;
	padding:5px 0 0 0;
	}
.footNav dd{
	height:25px;
	line-height:25px;
	color:#fff;
	font-size:1.4rem;
	}
.footNav dl:hover{
	background:#000;	
	}

</style>
<script>
export default {
  
}
</script>


