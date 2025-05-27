let gameSeq=[];
let userSeq=[];
let highest =document.querySelector("h3");
highest.innerText = "High score : "
highest=0;


let btns = ["blue","red","yellow","green"];
let h2 = document.querySelector("h2");


let started=false;
let level =0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started=true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
};

function levelup(){
    userSeq =[];
level++;
h2.innerText= `Level ${level}`;

//random
let randomidx = Math.floor(Math.random() *3);
let randomclr = btns[randomidx];
let randombtn = document.querySelector( `.${randomclr}`);
gameSeq.push(randomclr);
console.log(randomidx);
console.log(randomclr);
console.log(randombtn);
btnflash(randombtn);

}; 
function checkans(idx){
     
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`GAME OVER !!! PLAESE TRY AGAIN , your score was ${level -1}`;
        reset();
    }
    highscore(); 

}

function btnPress(){
    let btn = this;
    console.log(btn);
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkans(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started =false;
    userSeq=[];
    gameSeq=[];
    level =0;

}
function highscore(){
    if(level>=highest){
        highest.innerText=`high score : ${level}`;
        highest=level;
    }
}