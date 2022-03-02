const gameArea = document.querySelector('.game-area');

for(let i = 1; i <= 100; i++){
    square = document.createElement("div");
    square.classList.add("square");
    gameArea.append(square);
}