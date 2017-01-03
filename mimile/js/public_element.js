function $(cls) {

	var reg = /\s+/;
	if(reg.test(cls)) {
		cls = cls.split(reg).join("");
	}
	var str = cls.slice(1, cls.length);
	if(cls[0] === ".") {
		if(document.getElementsByClassName) {
			return document.getElementsByClassName(str)
		} else {
			var arr = [];
			var all = document.getElementsByTagName("*");
			for(var i = 0; i < all.length; i++) {
				if(all[i].className === str) {
					arr[arr.length] = all[i];
				}
			}
			return arr;
		}

	} else if(cls[0] === "#") {
		return document.getElementById(str);
	} else {
		return document.getElementsByTagName(cls);
	}

}