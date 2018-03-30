// JavaScript Document
$(function(){
	$(".zhaieq a").click(function(){
		$(this).addClass("zhaiCur").siblings("a").removeClass("zhaiCur");
		var zhaiindex=$(this).index();
		$(".proinfoList").eq(zhaiindex).fadeIn().siblings(".proinfoList").hide();
		})
	})