const gameBoard = document.querySelector(".main__board");



const setUpBoard = () => {
    spawnPiece("white_rook", "(0,0)");
    spawnPiece("white_knight", "(1,0)");
    spawnPiece("white_bishop", "(2,0)");
    spawnPiece("white_queen", "(3,0)");
    spawnPiece("white_king", "(4,0)");
    spawnPiece("white_bishop", "(5,0)");
    spawnPiece("white_knight", "(6,0)");
    spawnPiece("white_rook", "(7,0)");
    spawnPiece("white_pawn", "(0,1)");
    spawnPiece("white_pawn", "(1,1)");
    spawnPiece("white_pawn", "(2,1)");
    spawnPiece("white_pawn", "(3,1)");
    spawnPiece("white_pawn", "(4,1)");
    spawnPiece("white_pawn", "(5,1)");
    spawnPiece("white_pawn", "(6,1)");
    spawnPiece("white_pawn", "(7,1)");

    spawnPiece("black_rook", "(0,7)");
    spawnPiece("black_knight", "(1,7)");
    spawnPiece("black_bishop", "(2,7)");
    spawnPiece("black_queen", "(3,7)");
    spawnPiece("black_king", "(4,7)");
    spawnPiece("black_bishop", "(5,7)");
    spawnPiece("black_knight", "(6,7)");
    spawnPiece("black_rook", "(7,7)");
    spawnPiece("black_pawn", "(0,6)");
    spawnPiece("black_pawn", "(1,6)");
    spawnPiece("black_pawn", "(2,6)");
    spawnPiece("black_pawn", "(3,6)");
    spawnPiece("black_pawn", "(4,6)");
    spawnPiece("black_pawn", "(5,6)");
    spawnPiece("black_pawn", "(6,6)");
    spawnPiece("black_pawn", "(7,6)");
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