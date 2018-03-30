<template>
    <div class="content">
     <h1 class="logo"><a href="index.html"><img src="../assets/images/logo.png" /></a></h1>
     <form action="login.html" method="get" class="reg-login">
      <h3>已经有账号了？点此<a class="orange" href="login.html">登陆</a></h3>
      <div class="lrBox">
       <div class="lrList"><input type="text" placeholder="输入手机号码或者邮箱号" v-model="username" /></div>
       <div class="lrList2"><input type="text" placeholder="输入短信验证码" /> <button>获取验证码</button></div>
       <div class="lrList"><input type="text" placeholder="设置新密码（6-18位数字或字母）" v-model="password" /></div>
       <div class="lrList"><input type="text" placeholder="再次输入密码" /></div>
      </div><!--lrBox/-->
      <div class="lrSub">
       <router-link type="submit" value="立即注册" @click.native="reg" to="login" tag="input"></router-link>
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
	}
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
		reg:function(){
			alert('1')
			let paramsObj = new URLSearchParams();
			paramsObj.append('username',this.username);
			paramsObj.append('password',this.password);
			this.$http.post('http://localhost:3000/reg',paramsObj,{
			headers:{
				"Content-Type":"application/x-www-form-urlencoded"
			}
			}).then(function(res){
				// console.log("1")
				
			})
		}
	}
	  
}

</script>

