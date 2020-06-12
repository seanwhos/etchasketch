const gameArea = document.querySelector("#game-area");
let grid = 16;
let flexPercent = 100 / grid;

function etch() {
    let h = Math.floor(Math.random() * 360);
    let l = 50;

    for (i = 0; i < grid * grid; i++) {
        let square = document.createElement('div');
        gameArea.appendChild(square).style.flexBasis = `${flexPercent}%`;
    };

    const gameSquare = gameArea.querySelectorAll("div");
    gameSquare.forEach(square => {
        square.addEventListener('mouseover', draw => {
            square.style.backgroundColor = `hsla(${h}, 100%, ${l}%)`;
            l -= 0.5;
        });
    });
};

etch();


const reset = document.querySelector('#reset')
reset.addEventListener('click', removeDiv => {
    while(gameArea.firstChild){
        gameArea.removeChild(gameArea.firstChild);
    };

    grid = prompt('Width of new grid?', 'e.g. 32');
    flexPercent = 100 / grid;

    etch()
});








