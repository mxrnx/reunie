/* Fire animation on text, stolen from the old website */
function fireAnim(){
	var element=document.getElementsByTagName('span');
	for(a=0;a<element.length;a++){
		if(element[a].getAttribute('data-role') != "burn")
			continue;
		var t, i;
		i = [], t = 0;
		//n = ["#fddf2b", "#fdba2b", "#fb9629", "#f86a1c"]
		n = ["#28d5e3", "#28d5e3", "#ff2ba0", "#fe2ba0", "#fe8da0", "#28d5e3"]
		n.forEach(function(r){
			var o, u;
			for (o = 2 + Math.round(2 * Math.random()), u = []; o >= 1; o += -1) i.push("0 " + t + "em " + -t + "em " +r), u.push(t -= .04);
		});
		element[a].style.textShadow=i.join(", ");
	}
	setTimeout("fireAnim()",100);
}
document.addEventListener("DOMContentLoaded", fireAnim);

function setActivePage(title) {
	var spans = document.getElementsByTagName('span');
	for(a=0;a<spans.length;a++){
		if (spans[a].innerHTML === title)
			spans[a].setAttribute('data-role', 'burn');
	}
}
