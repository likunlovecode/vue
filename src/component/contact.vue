<template>
    <div class="content">
     <h1 class="logo"><a href="index.html"><img src="../assets/images/logo.png" /></a></h1>
     
     <h2 class="title3">走进农场</h2>
     <div class="Article">
      <strong>小贝壳素材科技有限公司</strong><br /><br />
      地址：上海 · 普陀区曹杨路1040弄一号楼中友大厦19楼<br />
      电话：021-31127521 & 021-60521286<br />
      客服：kefu@webqin.ne  &  kefu2@webqin.net<br />
     </div><!--Article/-->
    </div>
</template>

<script>
export default {

}
</script>

<style>
.title3{
	margin:20px 0 5px 0;
	height:30px;
	line-height:30px;
	padding:0 10px;
	color:#fff;
	background:#00B150;
	font-size:1.4rem;
	}
.Article{
	font-size:1.4rem;
	line-height:25px;
	padding:10px 0;
	}
.new{
	
	}
.new li{
	position:relative;
	height:28px;
	line-height:27px;
	border-bottom:#ddd 1px solid;
	padding:0 5px;
	}
.new li a{
	display:inline-block;
	width:50%;
	overflow:hidden;
	white-space:nowrap;
	text-overflow:ellipsis;          /* for IE */
	-o-text-overflow: ellipsis;      /* for Opera */
	-icab-text-overflow: ellipsis;   /* for iCab */
	-khtml-text-overflow: ellipsis;  /* for Konqueror Safari */
	-moz-text-overflow: ellipsis;    /* for Firefox,mozilla */
	-webkit-text-overflow: ellipsis; /* for Safari,Swift*/
	}
.new a:link {color: #333;} /* 未访问的链接 */
.new a:visited {color: #333;} /* 已访问的链接 */
.new a:hover{color:#333;} /* 鼠标在链接上 */ 
.new a:active {color: #333;} /* 点击激活链接——在你点击该链接之后，页面正在转向新地址的时候，链接显示此颜色；当你已经到了要链接的页面，然后再返回，原页面上的此链接仍是此颜色 */ 
.new li span{
	position:absolute;
	right:0;
	top:0;
	color:#999;
	}
</style>
