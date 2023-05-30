const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0,0,canvas.width, canvas.height);

ctx.rotate(45 * Math.PI / 180);
ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.fillRect(400,200, 100,100);