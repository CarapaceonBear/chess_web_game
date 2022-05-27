const gameBoard = document.querySelector(".main__board");



const setUpBoard = () => {
    spawnPiece("white_king", "(4,0)");
    spawnPiece("black_king", "(3,7)")
}

const spawnPiece = (piece, xy) => {
    let square = convertSquareXYtoClass(xy);
    gameBoard.innerHTML += 
        `<div class="piece ${square}">
            <img class="piece__image" src="./assets/chess_piece_2_${piece}.png">
            <button class="piece__button"></button>
        </div>`
}

const convertSquareClassToXY = (square) => {
    return `(${square[6]},${square[7]})`
}
const convertSquareXYtoClass = (xy) => {
    return `square${xy[1]}${xy[3]}`
}



setUpBoard();