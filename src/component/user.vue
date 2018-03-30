<template>
<div class="box">
    <div class="content">
     <div><img src="../assets/images/user.jpg"></div>
     <div class="height2"></div>
     <ul class="userNav width640">
      <li><span class="glyphicon glyphicon-list-alt"></span><a href="order.html">我的订单</a></li>
	  <li><span class="glyphicon glyphicon-briefcase"></span><a href="javascript:;">我的菜箱</a><a href="tel:400-861-9090" class="tel">会员可以选菜啦</a></li>
      <li><span class="glyphicon glyphicon-link"></span><a href="javascript:;">绑定套餐</a></li>
      <div class="height2"></div>
      <li><span class="glyphicon glyphicon-usd"></span><a href="quan.html">我的抵用券</a></li>
      <li><span class="glyphicon glyphicon-map-marker"></span><a href="add-address.html">收货地址管理</a></li>
      <li><span class="glyphicon glyphicon-star-empty"></span><a href="shoucang.html">我的收藏</a></li>
      <li><span class="glyphicon glyphicon-heart"></span><a href="shoucang.html">我的喜好</a></li>
	 </ul><!--userNav/-->
     
     <div class="lrSub">
       <router-link href="javascript:;" to="/login" @click.native="del">退出登录</router-link>
     </div>
    </div><!--content/-->
    
    <div class="height1"></div>
    <div class="content"></div>
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
      <router-link href="jvascript:;" to="user">
       <dt><span class="glyphicon glyphicon-user"></span></dt>
       <dd>会员</dd>
      </router-link>
     </dl>
    </div>
</div>
  
</template>
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
<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        msg:''
      }
	},
    beforeRouteEnter(to, from, next) {
      axios({
        url:'http://localhost:3000/user',
        withCredentials: true
      }).then(
        res => {
			// console.log(res)
          if(res.data.error==0){
            next(_this => {
              //_this == 将要挂载的组件
              _this.msg = res.data; //修改组件数据
            })
          }else{
            next("/login"); //跳转
          }
        }
	  )
	},
	methods:{
		del(){
			alert("...")
			this.$http({
				url:'http://localhost:3000/del',
       			withCredentials: true,
			}).then(function(res){
				console.log(res)
			})
		}
	},
  }
</script>




