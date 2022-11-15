$(function() {
	$('.template1>li').mouseover(function() {
		$('.list2>ul').removeClass('hide').addClass('show')
	})
	$('.template1>li').mouseout(function() {
		$('.list2>ul').removeClass('show').addClass('hide')
	})
	$('.list2>ul').mouseover(function() {
		$(this).removeClass('hide').addClass('show')
	})
	$('.list2>ul').mouseout(function() {
		$(this).removeClass('show').addClass('hide')
	})

	$('.template2>.one_a').mouseover(function() {
		$('#leftlist1').removeClass('hide').addClass('show')
	})
	$('.template2>.one_a').mouseout(function() {
		$('#leftlist1').removeClass('show').addClass('hide')
	})
	$('#leftlist1').mouseover(function() {
		$(this).removeClass('hide').addClass('show')
	})
	$('#leftlist1').mouseout(function() {
		$(this).removeClass('show').addClass('hide')
	})

	$('.template2>.one_b').mouseover(function() {
		$('#leftlist2').removeClass('hide').addClass('show')
	})
	$('.template2>.one_b').mouseout(function() {
		$('#leftlist2').removeClass('show').addClass('hide')
	})
	$('#leftlist2').mouseover(function() {
		$(this).removeClass('hide').addClass('show')
	})
	$('#leftlist2').mouseout(function() {
		$(this).removeClass('show').addClass('hide')
	})


	$('.template2>.one_c').mouseover(function() {
		$('#leftlist3').removeClass('hide').addClass('show')
	})
	$('.template2>.one_c').mouseout(function() {
		$('#leftlist3').removeClass('show').addClass('hide')
	})
	$('#leftlist3').mouseover(function() {
		$(this).removeClass('hide').addClass('show')
	})
	$('#leftlist3').mouseout(function() {
		$(this).removeClass('show').addClass('hide')
	})

})
//图片懒加载
let imgs = document.querySelectorAll('img')
fn()
window.onscroll = lazyload

function fn() {
	let clientH = window.innerHeight
	Array.from(imgs).forEach((item,index)=>{
		let oBounding = item.getBoundingClientRect()
		if(index == 43){
			console.log(oBounding.top,clientH)
		}
		
		if(oBounding.top>0 && oBounding.top <= clientH ){
			item.src = item.getAttribute('data-url')
		}
	})
}
let flat = true
function lazyload() {
	if (flat) {
		flat = false
		setTimeout(function() {
			fn()
			flat = true
		}, 300)
	} else {
		return
	}
}


function one_a() {
	var one_a = document.getElementsByClassName('one_a')
	for (let i = 0; i < one_a.length; i++) {
		one_a[i].addEventListener('onmouseover', function(e) {
			one_a[i].style.backgroundColor = '#FF6700';
		}, false)
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
	autoplay: true,

});
