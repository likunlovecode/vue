<template>
  <div class="content">
     <div id="sliderA" class="slider">
       <img src="../assets/images/proinfo.jpg" />
     </div><!--sliderA/-->
     <table class="jia-len">
      <tr>
       <th><strong class="orange">14.25</strong></th>
       <td>
        <div id="a" class="Spinner"></div>
       </td>
      </tr>
      <tr>
       <td>
        <strong>三级分销农庄有机毛豆500g</strong>
        <p class="hui">富含纤维素，平衡每日膳食</p>
       </td>
       <td align="right">
        <a href="javascript:;" class="shoucang"><span class="glyphicon glyphicon-star-empty"></span></a>
       </td>
      </tr>
     </table>
     <div class="height2"></div>
     <h3 class="proTitle">商品规格</h3>
     <ul class="guige">
      <li class="guigeCur"><a href="javascript:;">500g</a></li>
      <li><a href="javascript:;">1000g</a></li>
      <li><a href="javascript:;">1500g</a></li>
      <li><a href="javascript:;">2000g</a></li>
      <li><a href="javascript:;">3000g</a></li>
      <div class="clearfix"></div>
     </ul><!--guige/-->
     <div class="height2"></div>
     <div class="zhaieq">
      <a href="javascript:;" class="zhaiCur">商品简介</a>
      <a href="javascript:;">商品参数</a>
      <a href="javascript:;" style="background:none;">订购列表</a>
      <div class="clearfix"></div>
     </div><!--zhaieq/-->
     <div class="proinfoList">
      <img src="../assets/images/shangpin.jpg" width="636" height="822" />
     </div><!--proinfoList/-->
     <table class="jrgwc">
      <tr>
       <th>
        <a href="index.html"><span class="glyphicon glyphicon-home"></span></a>
       </th>
       <td><router-link href="javascript:;" to="car">加入购物车</router-link></td>
      </tr>
     </table>
    </div>
</template>

<script>
export default {
	
}
</script>

<style>
.proinfoList{
	padding:10px 5px;
	min-height:300px;
	}

/*jrgwc*/
.jrgwc{
	width:100%;
	margin:10px 0 0 0;
	}
.jrgwc th{
	width:30%;
	padding:5px 10px;
	text-align:center;
	border-top:#ddd 1px solid;
	}
.jrgwc th a{
	font-size:3rem;
	color:#8b8b8b;
	}
.jrgwc td{
	border-top:#ddd 1px solid;
	padding:5px;
	text-align:center;
	}
.jrgwc td a{
	display:inline-block;
	text-align:center;
	width:100%;
	height:37px;
	line-height:37px;
	background:#f60;
	color:#fff;
	font-size:1.6rem;
	-moz-border-radius: 4px;      /* Gecko browsers */
    -webkit-border-radius: 4px;   /* Webkit browsers */
    border-radius:4px;            /* W3C syntax */
	}
.jrgwc td a:hover{ background:#f90;}

/*登录注册*/
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
