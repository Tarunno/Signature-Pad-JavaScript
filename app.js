const canvas = document.querySelector("canvas"),
	  myCanvas = canvas.getContext("2d");

var draw = false,
 	color = "black";

canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", end);
canvas.addEventListener("mouseleave",end);
canvas.addEventListener("mousemove", drawing);

const saveBtn = document.querySelector(".save"),
	  clearBtn = document.querySelector(".clear");
saveBtn.addEventListener('click', saveCanvas);
clearBtn.addEventListener('click', clearCanvas);

function setColor(str){
	color = str;
}

function start() {
	draw = true;
	myCanvas.beginPath();
}

function end() {
	draw = false;
}

function drawing(e) {
	if (draw === false) return;
	myCanvas.lineWidth = 2;
	myCanvas.strokeStyle = color;
	myCanvas.lineCap = "round";
	var pos = canvas.getBoundingClientRect();
	var extraHeight = pos.top;
	var extraWidth = pos.left;
	myCanvas.lineTo(e.clientX-extraWidth, e.clientY-extraHeight);
	myCanvas.stroke();
}

function saveCanvas() {
	const container = document.createElement("a");
	document.body.appendChild(container);
	container.href = canvas.toDataURL();
	container.download = "signature" + Math.floor(Math.random() * 10000 ) + 1 + ".png";
	container.click();
	document.body.removeChild(container);
}

function clearCanvas(){
	myCanvas.clearRect(0, 0, canvas.width, canvas.height);
}
