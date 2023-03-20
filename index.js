let scoreHome = 0
let scoreGuest = 0
let num = 0;
let updateScore = document.getElementById("score")
let updateScoreGuest = document.getElementById("scoreGuest")
function add1(){
    scoreHome += 1;
    updateScore.textContent = scoreHome;
}
function add2(){
    scoreHome += 2;
    updateScore.textContent = scoreHome;
}
function add3(){
    scoreHome += 3;
    updateScore.textContent = scoreHome;
}

function reset(){
    scoreHome = 0;
    updateScore.textContent = scoreHome;
}
function add1Guest(){
    scoreGuest += 1;
    updateScoreGuest.textContent = scoreGuest;
}
function add2Guest(){
    scoreGuest += 2;
    updateScoreGuest.textContent = scoreGuest;
}
function add3Guest(){
    scoreGuest += 3;
    updateScoreGuest.textContent = scoreGuest;
}
function resetGuest(){
    scoreGuest = 0;
    updateScoreGuest.textContent = scoreHome;
}
