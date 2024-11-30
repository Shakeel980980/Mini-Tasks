let gameSequence = [];
let userSequence = [];


let btns = ["box1", "box2", "box3", "box4"]; // its array valued for match 

let started =  false;
let level = 0; 


let h2 = document.querySelector("h2");

document.addEventListener('keypress', function(){
    if(started==false)
    {
        console.log("Game is Started");
        started = true;
       levelUp();   
    }
});

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
       btn.classList.remove("flash");
    }, 400);
}

function levelUp(){
    level++;
    h2.innerText = `level ${level}`;

    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randBTn = document.querySelector(`.${randColor}`);

    gameSequence.push(randColor);     
    btnFlash(randBTn);
}

function checkAns(indx){

if(userSequence[indx] === gameSequence[indx])
{
    if(userSequence.length === gameSequence.length)
    {
        setTimeout(levelUp, 1000);
    }
}else{
    h2.innerHTML = `Your Game Is Over! <b>Your Scoure is ${level} </b> <br> Press any key to start`;

    document.querySelector("body").style.backgroundColor="red"; 

    setTimeout(function() {
        document.querySelector("body").style.backgroundColor="white"; 
    }, 150);
    reset();
}
}
function btnPress(){

    let btn = this;
    btnFlash(btn);

    UserColor =btn.getAttribute("id");
    userSequence.push(UserColor);

    checkAns(userSequence.length-1);
  
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns)
{
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSequence =[];
    userSequence = [];
    level = 0;

}