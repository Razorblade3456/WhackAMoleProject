let currMoleTile; 
let currPassiveTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //setting up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 - 8, and stops at 9

        let title = document.createElement("div");
        title.id = i.toString();
        title.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(title);
    }

    setInterval(setMole, 1000); //2000 milliseconds is = to 1 seconds
    setInterval(setPassive, 2000); //3000 milliseconds is = to 2 seconds

}

function getRandomTile(){
    // math.random returns a number between 0 and 1 and if it multiplies by 9 this range becomes 0 - 9 but it does not include 9 rounded down using math.floor u get 0 - 8
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./ClericBeast.png";

    let num = getRandomTile();
    if (currPassiveTile && currPassiveTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}

function setPassive() {
    if (gameOver) {
        return;
    }

    if (currPassiveTile) {
        currPassiveTile.innerHTML = "";
    }
    let Passive = document.createElement("img");
    Passive.src = "./Passive1.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id ==num) {
        return;
    }
    currPassiveTile = document.getElementById(num);
    currPassiveTile.appendChild(Passive);

}

function selectTile () {
    if (gameOver) {
        return;
    }

    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score
    }
    else if (this == currPassiveTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true 
    }
}
