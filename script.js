let timer = 30;
let score = 0;
let hitCount =0;

function scoreInc (){
    score += 10;
    document.querySelector('#scoreval').textContent = score
}
function hitRun(){
    hitCount = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitCount;
}

function BubbleMake(){
    var clutter  = '';

for(var i = 1; i<= 102; i++){
    let bubble = Math.floor(Math.random()*10)
    clutter += ` <div class="bubble">${bubble}</div>`;
}

document.querySelector('.pbtm').innerHTML = clutter;
}



function runTimer (){
   let timerInt = setInterval(() => {
        if( timer > 0 ){
            timer--;
        document.querySelector('#timer').textContent = timer;
        }else{
            document.querySelector('.pbtm').innerHTML = `<h1>Game Over</h1>`;
            clearInterval(timerInt)
        }
    } ,1000)
}

document.querySelector('.pbtm').addEventListener('click', (e) => {
    let clickNum = Number(e.target.textContent);
    
    if(clickNum === hitCount){
        scoreInc()
        BubbleMake()
        hitRun()
       
    }
})
BubbleMake();
runTimer();
hitRun();
