let gameseq = [];
let userseq = [];

let btns = ["yellow","red","purple","green"];

let level=0;
let higestscore=0;
let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started = true;

        levelup();
    }
});


function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq =[];
    level++;
    h2.innerText=`Level ${level}`;

    //random button choose
    let randidx=Math.floor(Math.random()*btns.length);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}
function checkans(idx){
    // console.log("current level : ",level);

    if(userseq[idx]==gameseq[idx]){
       if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
       }
    }
    else{
        if(level>higestscore){
            higestscore = level;
        }
        h2.innerHTML = `Game over!your score was <b> ${level} </b> <br> Higest Score: <b> ${higestscore} </b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
