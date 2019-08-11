
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    //si golpea la parte superior, invertir la dirección de la pelota
    if(y + dy > canvas.height || y + dy < 0) {
    dy = -dy;
  }
    if(x + dx > canvas.width || x + dx < 0) {
    dx = -dx;
  }
}

//para repetir un ntervalo de forma establecida
setInterval(draw, 2);
