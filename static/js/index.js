$(function(){
	$('.template1>li').mouseover(function(){
		$('.list2>ul').removeClass('hide').addClass('show')
	})
	$('.template1>li').mouseout(function(){
		$('.list2>ul').removeClass('show').addClass('hide')
	})
	$('.list2>ul').mouseover(function(){
		$(this).removeClass('hide').addClass('show')
	})
	$('.list2>ul').mouseout(function(){
		$(this).removeClass('show').addClass('hide')
	})
	
	$('.template2>li').mouseover(function(){
		$('#leftlist1').removeClass('hide').addClass('show')
	})
	$('.template2>li').mouseout(function(){
		$('#leftlist1').removeClass('show').addClass('hide')
	})
	$('#leftlist1').mouseover(function(){
		$(this).removeClass('hide').addClass('show')
	})
	$('#leftlist1').mouseout(function(){
		$(this).removeClass('show').addClass('hide')
	})

})
function one_a(){
	var one_a = document.getElementsByClassName('one_a')
	for(let i=0;i<one_a.length;i++){
		one_a[i].addEventListener('onmouseover',function(e){
			one_a[i].style.backgroundColor= '#FF6700';
		},false)
	}
}


var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
		navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		loop: true,
		autoplay:true,
		
      });