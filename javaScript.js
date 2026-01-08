let boxs = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let newGame2 = document.querySelector("#newGame2");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let msgContainer2= document.querySelector(".msg-container2");
let msg2 = document.querySelector("#msg-2");
let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    enableBoxs();
    msgContainer.classList.add("hide");
    msgContainer2.classList.add("hide2");
    turn0 = true;
}
const checkDraw = () => {
    return Array.from(boxs).every(b => b.innerText.trim() !== "");
}

boxs.forEach((box) =>{
    box.addEventListener("click", () => {
       if(turn0) {
        box.innerText = "O";
        turn0 = false;
       } else {
        box.innerText = "X";
        turn0 = true;
       }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxs = () =>{
    for(let box of boxs){
        box.disabled = true;
    }
}
const enableBoxs = () =>{
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";

    }
}
const showWinner = (Winner) =>{
    msg.innerText = `Congratulations , Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxs();
}
const showDraw = () =>{
    msg2.innerText = `Game was Draw!`;
    msgContainer2.classList.remove("hide2");
    disableBoxs();
}
const checkWinner = () => {
    for(let pattern of winPatterns){
       const pos1 = boxs[pattern[0]].innerText.trim();
       const pos2 = boxs[pattern[1]].innerText.trim();
       const pos3 = boxs[pattern[2]].innerText.trim();

       if(pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
           console.log("Winner " + pos1);
           showWinner(pos1);
           return;
       }
    }
    if(checkDraw()){
        showDraw();
    }
}
reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
newGame2.addEventListener("click", resetGame);