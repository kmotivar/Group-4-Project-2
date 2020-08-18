// create canvas
var c = document.querySelector("Canvas");
var ctx = c.getContext("2d");

//for text
ctx.font = "20px rogfonts";
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "violet");;
gradient.addColorStop("1.0", "yellow");
ctx.strokeStyle = gradient;
ctx.strokeText("KJS",8,15);

//circle
ctx.fillStyle = "#c82124";
ctx.beginPath();
ctx.arc(24, 34, 15, 10, 20 * Math.PI);
ctx.closePath();
ctx.fill();