document.addEventListener("DOMContentLoaded", function(){

const gameThumbnail = document.querySelector("#games_container");
const gameCube = document.querySelector("#gameCube");


gameThumbnail.addEventListener("click",function(e)
{
    console.log(e.target.nodeName)
    if(e.target && e.target.nodeName == ("DIV") || e.target.nodeName == ("H2"))
    {
        gameCube.classList.toggle("hidden");
    }
});

//Snake Game CODE
const gameCanvas = document.createElement('canvas');
gameCube.appendChild(gameCanvas);

const gameCanvas_ctx = gameCanvas.getContext("2d");
console.log(gameCanvas_ctx);
sMain();

var snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200}
  ];



function sMain()
{
    clearCanvas();
    drawSnake();
}
function clearCanvas()
{
    //  Select the colour to fill the drawing
    snakeboard_ctx.fillStyle = 'white';
    //  Select the colour for the border of the canvas
    snakeboard_ctx.strokestyle = 'black';
    // Draw a "filled" rectangle to cover the entire canvas
    snakeboard_ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    // Draw a "border" around the entire canvas
    snakeboard_ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function drawSnakePart(snakePart)
{
    gameCanvas_ctx.fillStyle = 'blue';
    gameCanvas_ctx.strokeStyle = 'darkblue';
    gameCanvas_ctx.fillRect(snakePart.x,snakePart.y,10,10);
    gameCanvas_ctx.strokeRect(snakePart.x,snakePart.y,10,10);
}

function drawSnake()
{
    snake.forEach(drawSnakePart);
}



});