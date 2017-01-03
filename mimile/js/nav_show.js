function showNav(iTargetClassA,iTargetClassB) {

	var a = document.getElementsByClassName(iTargetClassA);
	var b = document.getElementsByClassName(iTargetClassB);
	for(i = 0; i < a.length; i++) {
		a[i].index = i;
		b[i].index=i;
		a[i].onmouseover = function() {
			changeMode(this.index, "block");
		}
		a[i].onmouseout = function() {
			changeMode(this.index, "none");
		}
		b[i].onmouseover = function() {
			changeMode(this.index, "block");
		}
		b[i].onmouseout = function() {
			changeMode(this.index, "none");
		}
	}

	function changeMode(iTarget, o) {
		b[iTarget].style.left = a[iTarget].offsetLeft + "px";
		b[iTarget].style.top = a[iTarget].offsetHeight + "px";
		b[iTarget].style.display = o;
	}
}
function showSubClass(iTargetClassA,iTargetClassB) {

	var a = iTargetClassA;
	var b = iTargetClassB;
	for(i = 0; i < a.length; i++) {
		a[i].index = i;
		b[i].index=i;
		a[i].onmouseover = function() {
			changeMode(this.index, "block");
		}
		a[i].onmouseout = function() {
			changeMode(this.index, "none");
		}
		b[i].onmouseover = function() {
			changeMode(this.index, "block");
		}
		b[i].onmouseout = function() {
			changeMode(this.index, "none");
		}
	}

	function changeMode(iTarget, o) {
		b[iTarget].style.display = o;
	}
}