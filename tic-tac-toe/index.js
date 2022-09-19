// console.log("tiut");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
// debugger;
let gameover = new Audio("gameover.mp3");
let isgameover = false;
let turn = "X";
// Function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
// function to check for win
const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let box = document.getElementsByClassName("box");

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== "") {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "won";
            box[e[1]].style.backgroundColor = "#F5EDDC";
            box[e[0]].style.backgroundColor = "#F5EDDC";
            box[e[2]].style.backgroundColor = "#F5EDDC";
            isgameover = true;
            // gameover.play();

        }

    })
}
// music.play();
// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            audioTurn.play();
            boxtext.innerText = turn;
            checkwin();
            turn = changeTurn();
            if (!isgameover) {

                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }
    })

});

// RESET
document.getElementById("reset").addEventListener("click", () => {
    Array.from(document.getElementsByClassName("boxtext")).forEach(element => {
        element.innerText = "";
    })
    document.getElementsByClassName("info")[0].innerText = "Turn for" + "X";



})

