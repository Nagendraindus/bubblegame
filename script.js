var time = 4;
var score = 0;
var hitint = 0;
var clickedNum = 0;

// created a variale outside the function nd set it to zero so that if variable changes in the function, it also changes in this var and we can use the same variable outside the function

function reloadPage(){
    location.reload();
}

function giveScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;

}

function getNewHit(){
    hitint = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitint;

}

function createBubble(){
    var clutter="";

for(var i =1;i<=(16*8);i++){
    random=Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${random}</div>` ;

}


document.querySelector("#panel-bottom").innerHTML=clutter;

}



function Timer(){
    var timer = setInterval(function(){
        if(time>0){
            time--;
        document.querySelector("#timerval").textContent=time;
        }else{
            clearInterval(timer);
            document.querySelector("#panel-bottom").innerHTML =
            `<div id="game-result">
            <ol>
                <li>
                <h1 id="gover">Game Over</h1> 
                </li>
                <li>
                <H2 id="result"> YOUR SCORE IS :${score} </H2>
                </li>
                <li>
                <button class="start-button" onclick="reloadPage()"> start over <button>
                </li>
            </ol>
            </div>`;
        }
        
    },1000);
 }

// if(hitint==4){
//     console.log("hello")
// }else{
//     console.log("no")
// }

document.querySelector("#panel-bottom").addEventListener("click",function(details){
   var clickedNum = Number(details.target.textContent);
   if(clickedNum===hitint){
    giveScore();
    getNewHit();
    createBubble();
}
})



Timer();
createBubble();
getNewHit();


