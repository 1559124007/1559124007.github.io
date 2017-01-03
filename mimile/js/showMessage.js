function showMessage() {
	var content = $("#content");
	content.onmousemove = function() {
		move(0)
	};
	content.onmouseout = function() {
		move(-200)
	};
	var timer;

	function move(iTarget) {
		clearInterval(timer);
		timer = setInterval(function() {
			var speed = (iTarget - content.offsetLeft) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(content.offsetLeft === iTarget) {
				clearInterval(timer);
			} else {
				content.style.left = content.offsetLeft + speed + "px";
			}
		}, 30);
	}
}