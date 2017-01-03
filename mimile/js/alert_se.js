window.alert = function(str) {
				var bgDiv = document.createElement("div");
				bgDiv.style.position = "absolute";
				bgDiv.style.left = "0";
				bgDiv.style.top = "0"
				bgDiv.style.width = "100%";
				var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
				bgDiv.style.height = h + "px";
				try {
					bgDiv.style.background = "rgba(0,0,0,.5)";
				} catch(e) {
					bgDiv.style.background = "#000";
					bgDiv.style.filter = "alpha(opacity=50)";
				}
				bgDiv.style.zIndex = "299";
				document.body.appendChild(bgDiv);
				var centerDiv = document.createElement("div");
				centerDiv.id = "centerDiv";
				centerDiv.style.position = "absolute";
				centerDiv.style.left = "50%";
				centerDiv.style.top = "50%";
				centerDiv.style.marginLeft = "-225px";
				centerDiv.style.marginTop = "-75px";
				centerDiv.style.width = "450px";
				centerDiv.style.height = "150px";
				centerDiv.style.background = "#fff";
				centerDiv.style.zIndex = "300";
				var strHtml = "<ul style='list-style:none;margin:0;padding:0;width:100%;'>";
				strHtml += "<li style='background:blue;text-align:left;padding-left:20px;font-size:14px;font-weight:blod;height:25px;line-height:25px;border:1px solid #f9cade;'>警告提示</li>"
				strHtml += "<li style='height:100px;line-height:100px;text-align:center;'>" + str + "</li>";
				strHtml += "<li><button id='okBtn' onclick='ok()' style='margin:-5px 0 0 196px'>确定</button></li>";
				strHtml += "</ul>";
				centerDiv.innerHTML = strHtml;
				document.body.appendChild(centerDiv);
				this.ok = function() {
					bgDiv.parentNode.removeChild(bgDiv);
					centerDiv.parentNode.removeChild(centerDiv);
				}
				document.getElementById("okBtn").focus();

			}