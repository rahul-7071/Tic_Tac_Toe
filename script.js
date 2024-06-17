let btns=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("p");
let turn=true;

let beat = new Audio('//wow.mp3');
// let beat = new Audio('/path/to/my/beat.mp3');


const winPatterns=[
       [0,1,2],
       [0,3,6],
       [0,4,8],
       [1,4,7],
       [2,5,8],
       [2,4,6],
       [3,4,5],
       [6,7,8],
];
const resetGame=()=>{
    turn =true;
enablebtn();
msgContainer.classList.add("hide");
}

const enablebtn=()=>{
for(let btn of btns){
    btn.disabled=false;
    btn.innerText="";
}
}

const disablebtn=()=>{
    for(let btn of btns){
     btn.disabled=true;
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click",()=>{
        if(turn){
            navigator.vibrate(100);
            btn.innerText="X";
            btn.style.color="red"
            turn=false;
        }
        else{
            navigator.vibrate(100);
            btn.innerText="0";
            btn.style.color="black";
            turn=true;
        }
    btn.disabled=true;
    checkwinner();
    });
});

const showWinner=(Winner)=>{
msg.innerText=`Congrats! Winner Is ${Winner}`;
msgContainer.classList.remove("hide");

disablebtn();
}

const draw=()=>{
    msg.innerText="Draw";
}


const checkwinner=()=>{
    for(let pattern of winPatterns){
let posone=btns[pattern[0]].innerText;
let postwo=btns[pattern[1]].innerText;
let posthre=btns[pattern[2]].innerText;
if(posone !="" && postwo !="" && posthre !=""){
    if(posone ===postwo && postwo===posthre){
        showWinner(posone);
        beat.play();
beat.volume=0.5;
beat.pause();
beat.readyState();
    }
}
}
};



resetbtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);