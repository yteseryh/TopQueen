$(function(){
	//顶部小图标点击展示
	(function(){
		//小图标点击下拉
		$(".icon-wrap").click(function(){
			$(".dropdown").css("display","block").animate({left: "0"},500);
		})
		//点击其他区域收起
		$(document).click(function(){
			$(".dropdown").animate({left: "-100%"},500,function(){
				$(".dropdown").css("display","none")
			});
		});
		$(".icon-wrap").click(function(event){
			event.stopPropagation();
		});
		$(".dropdown").click(function(event){
			event.stopPropagation();
		});
	})();


	//轮播图插件初始化
	(function(){
		//第一个轮播图
		var mySwiper = new Swiper ('#swiper1', {
			//循环模式选项
		    loop: true, 
		    autoplay:{
			    delay: 3000,
			    disableOnInteraction: false,
			},
		    //分页器
		    pagination: {
		      el: '.swiper-pagination',
		      clickable :true,
		    }
	  	})
	})();

})
