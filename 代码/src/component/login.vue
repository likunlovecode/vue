<template>
    <div class="content">
     <h1 class="logo"><a href="index.html"><img src="../assets/images/logo.png" /></a></h1>
     <form action="user.html" method="get" class="reg-login">
      <h3>还没有小贝壳素材账号？点此<router-link class="orange" href="javascript:;" to="reg">注册</router-link></h3>
      <div class="lrBox">
       <div class="lrList"><input type="text" placeholder="输入手机号码或者邮箱号" v-model="username"/></div>
       <div class="lrList"><input type="text" placeholder="输入证码" v-model="password"/></div>
      </div><!--lrBox/-->
      <div class="lrSub">
       <input type="button" value="立即登录" @click="login"/>
      </div>
     </form><!--reg-login/-->
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
export default {
	data:function(){
		return{
			username:null,
			password:null
		}
	},
	methods:{
		login:function(){
			let _this = this
			let paramsObj = new URLSearchParams();
			paramsObj.append('username',this.username);
			paramsObj.append('password',this.password);
			
			this.$http.post('http://localhost:3000/login',paramsObj,{
			withCredentials: true,
			headers:{
				"Content-Type":"application/x-www-form-urlencoded"
			}
			}).then(function(res){
				console.log(res)
				if(res.data.a==true){
					// console.log(this)
					_this.$router.push({path: "/user"})
				}else{
					alert("用户名或密码错误")
				}
			})
		}
	}
	  
}
</script>



