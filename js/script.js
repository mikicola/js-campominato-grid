const idLevel = document.getElementById('level');
const btnPlay = document.querySelector('.btn-play');
const gameArea = document.querySelector('.game-area');
let level = document.getElementById('level');

btnPlay.addEventListener('click', startGame);



function selectedSquareChangeColor(){
    this.classList.add('square-selected-color');
}

function startGame() {
    
    gameArea.innerHTML = '';
    if(level.value == 'Easy') {
        for (let i = 1; i <= 100; i++) {
             let square = document.createElement("div");
            square.classList.add("square-easy");
            gameArea.append(square);
            square.innerHTML = i;

            square.addEventListener('click', selectedSquareChangeColor);
            console.log(i)
        }

    }else if (level.value == 'Medium') {
        for (let i = 1; i <= 81; i++) {
            let square = document.createElement("div");
            square.classList.add("square-medium");
            gameArea.append(square);
            square.innerHTML = i;

            square.addEventListener('click', selectedSquareChangeColor);
            console.log(i)
        }
    }else if (level.value == 'Hard') {
        for (let i = 1; i <= 49; i++) {
            let square = document.createElement("div");
            square.classList.add("square-hard");
            gameArea.append(square);
            square.innerHTML = i;

            square.addEventListener('click', selectedSquareChangeColor);
            console.log(i)
        }
    }
}















/* prova che non mi ha funzionato :(
arrLevels = [100, 81, 49];

function startGame(){
    const indexLevel = parseInt(idLevel.value); //creata qui
    console.log('indexLevel', indexLevel);
    
    let cellsCount = arrLevels[arrLevels]; //creata qui
    console.log('cellsCount', cellsCount);
    
    for(let cellNum = 1; cellNum <= cellsCount; cellNum ++){
    }
    console.log(cellNum);
}
*/