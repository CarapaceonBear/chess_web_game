const gameBoard = document.querySelector(".main__board");
// let whiteRookOneButton = null;
// let whiteRookTwoButton = null;
// let whiteBishopOneButton = null;

const pieces = [
    {
        name: "whiteRookOne",
        button: "whiteRookOneButton",
        square: [0,0],
        ruleset: "rook",
        image: "chess_piece_2_white_rook.png"
    },
    {
        name: "whiteKnightOne",
        button: "whiteKnightOneButton",
        square: [1,0],
        ruleset: "knight",
        image: "chess_piece_2_white_knight.png"
    },
    {
        name: "whiteBishopOne",
        button: "whiteBishopOneButton",
        square: [2,0],
        ruleset: "bishop",
        image: "chess_piece_2_white_bishop.png"
    },
    {
        name: "whiteQueen",
        button: "whiteQueenButton",
        square: [3,0],
        ruleset: "queen",
        image: "chess_piece_2_white_queen.png"
    },
    {
        name: "whiteKing",
        button: "whiteKingButton",
        square: [4,0],
        ruleset: "king",
        image: "chess_piece_2_white_king.png"
    },
    {
        name: "whiteBishopTwo",
        button: "whiteBishopTwoButton",
        square: [5,0],
        ruleset: "bishop",
        image: "chess_piece_2_white_bishop.png"
    },
    {
        name: "whiteKnightTwo",
        button: "whiteKnightTwoButton",
        square: [6,0],
        ruleset: "knight",
        image: "chess_piece_2_white_knight.png"
    },
    {
        name: "whiteRookTwo",
        button: "whiteRookTwoButton",
        square: [7,0],
        ruleset: "rook",
        image: "chess_piece_2_white_rook.png"
    },
    {
        name: "whitePawnOne",
        button: "whitePawnOneButton",
        square: [0,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnTwo",
        button: "whitePawnTwoButton",
        square: [1,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnThree",
        button: "whitePawnThreeButton",
        square: [2,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnFour",
        button: "whitePawnFourButton",
        square: [3,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnFive",
        button: "whitePawnFiveButton",
        square: [4,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnSix",
        button: "whitePawnSixButton",
        square: [5,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnSeven",
        button: "whitePawnSevenButton",
        square: [6,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnEight",
        button: "whitePawnEightButton",
        square: [7,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "blackRookOne",
        button: "blackRookOneButton",
        square: [0,7],
        ruleset: "rook",
        image: "chess_piece_2_black_rook.png"
    },
    {
        name: "blackKnightOne",
        button: "blackKnightOneButton",
        square: [1,7],
        ruleset: "knight",
        image: "chess_piece_2_black_knight.png"
    },
    {
        name: "blackBishopOne",
        button: "blackBishopOneButton",
        square: [2,7],
        ruleset: "bishop",
        image: "chess_piece_2_black_bishop.png"
    },
    {
        name: "blackQueen",
        button: "blackQueenButton",
        square: [3,7],
        ruleset: "queen",
        image: "chess_piece_2_black_queen.png"
    },
    {
        name: "blackKing",
        button: "blackKingButton",
        square: [4,7],
        ruleset: "king",
        image: "chess_piece_2_black_king.png"
    },
    {
        name: "blackBishopTwo",
        button: "blackBishopTwoButton",
        square: [5,7],
        ruleset: "bishop",
        image: "chess_piece_2_black_bishop.png"
    },
    {
        name: "blackKnightTwo",
        button: "blackKnightTwoButton",
        square: [6,7],
        ruleset: "knight",
        image: "chess_piece_2_black_knight.png"
    },
    {
        name: "blackRookTwo",
        button: "blackRookTwoButton",
        square: [7,7],
        ruleset: "rook",
        image: "chess_piece_2_black_rook.png"
    },
    {
        name: "blackPawnOne",
        button: "blackPawnOneButton",
        square: [0,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnTwo",
        button: "blackPawnTwoButton",
        square: [1,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnThree",
        button: "blackPawnThreeButton",
        square: [2,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnFour",
        button: "blackPawnFourButton",
        square: [3,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnFive",
        button: "blackPawnFiveButton",
        square: [4,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnSix",
        button: "blackPawnSixButton",
        square: [5,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnSeven",
        button: "blackPawnSevenButton",
        square: [6,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnEight",
        button: "blackPawnEightButton",
        square: [7,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    }
];

const setUpBoard = () => {
    pieces.forEach((piece) => {
        spawnPiece(piece);
    });
}

const spawnPiece = (piece) => {
    let square = convertSquareXYtoClass(piece.square);
    gameBoard.innerHTML += 
        `<div class="piece ${square}" id="${piece.name}">
            <img class="piece__image" src="./assets/${piece.image}">
            <button class="piece__button" id="${piece.name}"></button>
        </div>`
    // window[piece.button] = document.getElementById(`${piece.button}`)
}

const convertSquareClassToXY = (square) => {
    return [square[6],square[7]]
}
const convertSquareXYtoClass = (xy) => {
    return `square${xy[0]}${xy[1]}`
}

const onPieceClick = (event) => {
    console.log(event.target.id);
}


setUpBoard();

document.addEventListener("click", function (event) {
    if (event.target.matches(".piece__button")) {
        onPieceClick(event);
    }
});
