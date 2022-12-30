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


});