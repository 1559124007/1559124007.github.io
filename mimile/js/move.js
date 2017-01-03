/*该函数可实现元素宽度、高度、以及透明度的变化并且适配所有的浏览器。
 * 使用方法1、链式调用：var m = this;move(m, {width: 400,height: 200},finction(){move(m, {opacity: 100})})
 *       2、同时变化：move(this, {opacity: 100,width: 400,height: 200})
*/
function move(obj, json, fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var flag = true;
		for(var attr in json) {
			if(attr === "opacity") {
				var icur = parseFloat(getStyle(obj, attr)) * 100;
			} else {
				var icur = parseInt(getStyle(obj, attr));
			}
			var speed = (json[attr] - icur) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(icur !== json[attr]) {
				flag = false;

			}
			if(attr === "opacity") {
				obj.style.opacity = (icur + speed) / 100;
				obj.style.filter = "alpha(opacity:" + (icur + speed) + ")";
			} else {
				obj.style[attr] = icur + speed + "px";
			}
		}
		if(flag) {
			clearInterval(obj.timer);
			if(fn) {
				fn();
			}
		}
	}, 20);
}
//得到计算过后的属性值
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}