function timeFunction() {
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	m = addZero(m);
	h = addZero(h);

	document.getElementById("time").innerText=
	h + ":" + m;
}

setInterval(timeFunction, 0);

function addZero(x) {
	if (x < 10) {
		x = "0" + x
	};

	return x;
}
