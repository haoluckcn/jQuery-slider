var now = 0;
var open = true;
//判断是否为火狐浏览器
var isFirefox = typeof document.body.style.MozUserSelect != 'undefined';
//绑定滚轮事件
window.addEventListener(isFirefox ? 'DOMMouseScroll' : "mousewheel", fn, false);

function fn(e) {
	e = e || event;
	//调整滚轮返回值兼容
	a = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail % 3 == 0 ? e.detail / 3 : e.detail);
	if(open) {
		open = false;
		setTimeout(scrollevent, 500)
	} else {
		return false;
	}
}

function scrollevent() {
	now += a;
	if(now > 0) {
		now = 0;
	} else if(now < -4) {
		now = -4;
	}
	var dq = Math.abs(now);
	$('li').eq(dq).siblings().css('background', '#61A2F3')
	$('li').eq(dq).css('background', '#C7E0FF')
	$("footer section").eq(dq).addClass("flash");
	$("footer section").eq(dq).siblings("section").removeClass("flash");

	var top = now * 100 + "vh";
//	console.log(top)
	$("footer").css({
		"top": top
	})
	open = true;
}

for(var i = 0; i < $("li").length; i++) {
	$("li")[i].index = i;
	$("li")[i].onclick = function() {
		//alert(this.index)
		for(var i = 0; i < $("li").length; i++) {
			$("li")[i].style.background = '#61A2F3';
		}
		x = this.index;
		now = x
		var dq = Math.abs(x);
		$("footer section").eq(dq).addClass("flash");
		$("footer section").eq(dq).siblings("section").removeClass("flash");
		var top = x * -100 + "vh";
		$("footer").css({
			"top": top
		})
		this.style.background = '#C7E0FF';
	}
}