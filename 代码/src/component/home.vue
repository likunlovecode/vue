<template>
  <div class="home">
      <swiper></swiper>
      <banner></banner>
      <footbar></footbar>
  </div>
</template>
<script>
import swiper from './swiper';
import banner from './banner';
import footbar from './footbar';
export default {
  components:{
      swiper,banner,footbar
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

