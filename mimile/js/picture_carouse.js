function picture_switching(banner_img_list, banner_img, banner_img_lable, home_focus, colArray) {

	var a = banner_img_list;
	var b = banner_img;
	var c = home_focus;
	var d = colArray;
	var e = banner_img_lable[0];
	var f = banner_img_lable[1];
	var g = a[0].parentNode.parentNode;
	var num = 0;

	function ccp() {

		if(num == a.length - 1) {
			b[num].className = "";
			b[0].className = "show";
			a[num].className = "";
			a[0].className = "on";
			c.style.background = d[0];
			num = 0;
		} else {
			b[num].className = "";
			b[num + 1].className = "show";
			a[num].className = "";
			a[num + 1].className = "on";
			c.style.background = d[num + 1];
			num = num + 1;
		}

	}
	var carousel = window.setInterval(ccp, 2000);

	for(i = 0; i < a.length; i++) {
		a[i].index = i;
		a[i].onmouseover = function() {
			b[num].className = "";
			b[this.index].className = "show";
			a[num].className = "";
			a[this.index].className = "on";
			c.style.background = d[this.index];
			num = this.index;
			clearInterval(carousel);
		}
		a[i].onmouseout = function() {
			carousel = window.setInterval(ccp, 2000);
		}
	}
	e.onclick = function() {
		if(num == 0) {
			b[num].className = "";
			b[a.length - 1].className = "show";
			a[num].className = "";
			a[a.length - 1].className = "on";
			c.style.background = d[a.length - 1];
			num = a.length - 1;
		} else {
			b[num].className = "";
			b[num - 1].className = "show";
			a[num].className = "";
			a[num - 1].className = "on";
			c.style.background = d[num - 1];
			num = num - 1;
		}
	}
	f.onclick = function() {
		if(num == a.length - 1) {
			b[num].className = "";
			b[0].className = "show";
			a[num].className = "";
			a[0].className = "on";
			c.style.background = d[0];
			num = 0;
		} else {
			b[num].className = "";
			b[num + 1].className = "show";
			a[num].className = "";
			a[num + 1].className = "on";
			c.style.background = d[num + 1];
			num = num + 1;
		}
	}
	g.onmouseover = function() {
		clearInterval(carousel);
	}
	g.onmouseout = function() {
		clearInterval(carousel);
		carousel = window.setInterval(ccp, 2000);
	}
}

function picture_carousel1(banner_img, recommend_lable) {
	var a = banner_img;
	var l = recommend_lable[0];
	var r = recommend_lable[1];
	var timer;
	var num = 0;
	window.setInterval(function() {

		if(num >= -400) {
			num = num - 50;
			move(a, "top", num);
		} else {
			num = 0;
			a.style.top = num + "px";
		}
	}, 5000)

	function move(obj, attr, iTarget) {
		clearInterval(timer);
		timer = setInterval(function() {
			var icur = parseInt(getStyle(obj, attr));
			var speed = (iTarget - icur) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(icur === iTarget) {
				clearInterval(timer);
			} else {
				obj.style[attr] = icur + speed + "px";
			}
		}, 30);
	}
	l.onclick = function() {
		if(num < 0) {
			num = num + 50;
			move(a, "top", num);
		} else {
			num = -450;
			a.style.top = num + "px";
		}
	}
	r.onclick = function() {
		if(num >= -400) {
			num = num - 50;
			move(a, "top", num);
		} else {
			num = 0;
			a.style.top = num + "px";
		}
	}

	function getStyle(obj, attr) {
		if(obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, false)[attr];
		}
	}
}

function picture_carousel2(banner_img, recommend_lable) {
	var a = banner_img;
	var l = recommend_lable[0];
	var r = recommend_lable[1];
	var timer;
	var num = 0;
	window.setInterval(function() {

		if(num >= -2792) {
			num = num - 349;
			move(a, "left", num);
		} else {
			num = 0;
			a.style.left = num + "px";
		}
	}, 5000)

	function move(obj, attr, iTarget) {
		clearInterval(timer);
		timer = setInterval(function() {
			var icur = parseInt(getStyle(obj, attr));
			var speed = (iTarget - icur) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(icur === iTarget) {
				clearInterval(timer);
			} else {
				obj.style[attr] = icur + speed + "px";
			}
		}, 30);
	}
	l.onclick = function() {
		if(num < 0) {
			num = num + 349;
			move(a, "left", num);
		} else {
			num = -1047;
			a.style.left = num + "px";
		}
	}
	r.onclick = function() {
		if(num >= -2792) {
			num = num - 349;
			move(a, "left", num);
		} else {
			num = 0;
			a.style.left = num + "px";
		}
	}

	function getStyle(obj, attr) {
		if(obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, false)[attr];
		}
	}
}