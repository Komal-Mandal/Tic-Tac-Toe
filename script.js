
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");


let turno = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetgame = () => {
    turno = true;
    enable();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
    if(turno) {
        box.innerText = "o";
        turno = false;
    }
    else{
        box.innerText="x";
        turno = true;
    }
    box.disabled = true;
    checkwinner();


    });
})



 const showWinner = (winner) => {
 msg.innerText = `congratulations, winner ${winner}`;
 msgcontainer.classList.remove("hide");
 box.disabled = true;
 }

 const enable = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText ="";
    }
 }

const checkwinner = () => {
    for(pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val !="" && pos2val!=""&& pos3val!="" ){
            if(pos1val===pos2val && pos2val===pos3val) {
                console.log("winner", pos1val);
                
                showWinner(pos1val);
                
            }
        }
    }
}

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

