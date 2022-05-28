const gameBoard = document.querySelector(".main__board");
const gameDescription = document.querySelector(".header__description")
const resetButton = document.querySelector(".header__reset");
// let whiteRookOneButton = null;
// let whiteRookTwoButton = null;
// let whiteBishopOneButton = null;

// TODO set up import for the pieces array
const pieces = [
    {
        name: "whiteRookOne",
        button: "whiteRookOneButton",
        colour: "white",
        square: [3,3],
        ruleset: "rook",
        image: "chess_piece_2_white_rook.png"
    },
    {
        name: "whiteKnightOne",
        button: "whiteKnightOneButton",
        colour: "white",
        square: [1,0],
        ruleset: "knight",
        image: "chess_piece_2_white_knight.png"
    },
    {
        name: "whiteBishopOne",
        button: "whiteBishopOneButton",
        colour: "white",
        square: [2,0],
        ruleset: "bishop",
        image: "chess_piece_2_white_bishop.png"
    },
    {
        name: "whiteQueen",
        button: "whiteQueenButton",
        colour: "white",
        square: [3,0],
        ruleset: "queen",
        image: "chess_piece_2_white_queen.png"
    },
    {
        name: "whiteKing",
        button: "whiteKingButton",
        colour: "white",
        square: [4,0],
        ruleset: "king",
        image: "chess_piece_2_white_king.png"
    },
    {
        name: "whiteBishopTwo",
        button: "whiteBishopTwoButton",
        colour: "white",
        square: [5,0],
        ruleset: "bishop",
        image: "chess_piece_2_white_bishop.png"
    },
    {
        name: "whiteKnightTwo",
        button: "whiteKnightTwoButton",
        colour: "white",
        square: [6,0],
        ruleset: "knight",
        image: "chess_piece_2_white_knight.png"
    },
    {
        name: "whiteRookTwo",
        button: "whiteRookTwoButton",
        colour: "white",
        square: [7,0],
        ruleset: "rook",
        image: "chess_piece_2_white_rook.png"
    },
    {
        name: "whitePawnOne",
        button: "whitePawnOneButton",
        colour: "white",
        square: [0,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnTwo",
        button: "whitePawnTwoButton",
        colour: "white",
        square: [1,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnThree",
        button: "whitePawnThreeButton",
        colour: "white",
        square: [2,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnFour",
        button: "whitePawnFourButton",
        colour: "white",
        square: [3,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnFive",
        button: "whitePawnFiveButton",
        colour: "white",
        square: [4,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnSix",
        button: "whitePawnSixButton",
        colour: "white",
        square: [5,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnSeven",
        button: "whitePawnSevenButton",
        colour: "white",
        square: [6,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "whitePawnEight",
        button: "whitePawnEightButton",
        colour: "white",
        square: [7,1],
        ruleset: "white-pawn",
        image: "chess_piece_2_white_pawn.png"
    },
    {
        name: "blackRookOne",
        button: "blackRookOneButton",
        colour: "black",
        square: [0,7],
        ruleset: "rook",
        image: "chess_piece_2_black_rook.png"
    },
    {
        name: "blackKnightOne",
        button: "blackKnightOneButton",
        colour: "black",
        square: [1,7],
        ruleset: "knight",
        image: "chess_piece_2_black_knight.png"
    },
    {
        name: "blackBishopOne",
        button: "blackBishopOneButton",
        colour: "black",
        square: [2,7],
        ruleset: "bishop",
        image: "chess_piece_2_black_bishop.png"
    },
    {
        name: "blackQueen",
        button: "blackQueenButton",
        colour: "black",
        square: [3,7],
        ruleset: "queen",
        image: "chess_piece_2_black_queen.png"
    },
    {
        name: "blackKing",
        button: "blackKingButton",
        colour: "black",
        square: [4,7],
        ruleset: "king",
        image: "chess_piece_2_black_king.png"
    },
    {
        name: "blackBishopTwo",
        button: "blackBishopTwoButton",
        colour: "black",
        square: [5,7],
        ruleset: "bishop",
        image: "chess_piece_2_black_bishop.png"
    },
    {
        name: "blackKnightTwo",
        button: "blackKnightTwoButton",
        colour: "black",
        square: [6,7],
        ruleset: "knight",
        image: "chess_piece_2_black_knight.png"
    },
    {
        name: "blackRookTwo",
        button: "blackRookTwoButton",
        colour: "black",
        square: [7,7],
        ruleset: "rook",
        image: "chess_piece_2_black_rook.png"
    },
    {
        name: "blackPawnOne",
        button: "blackPawnOneButton",
        colour: "black",
        square: [0,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnTwo",
        button: "blackPawnTwoButton",
        colour: "black",
        square: [1,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnThree",
        button: "blackPawnThreeButton",
        colour: "black",
        square: [2,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnFour",
        button: "blackPawnFourButton",
        colour: "black",
        square: [3,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnFive",
        button: "blackPawnFiveButton",
        colour: "black",
        square: [4,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnSix",
        button: "blackPawnSixButton",
        colour: "black",
        square: [5,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnSeven",
        button: "blackPawnSevenButton",
        colour: "black",
        square: [6,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    },
    {
        name: "blackPawnEight",
        button: "blackPawnEightButton",
        colour: "black",
        square: [7,6],
        ruleset: "black-pawn",
        image: "chess_piece_2_black_pawn.png"
    }
];

const whiteOccupiedSpaces = [];
const blackOccupiedSpaces = [];
let currentPiece = null;

// game-state 
//  1 : white piece selection
//  2 : white move selection
//  1 : black piece selection
//  2 : black move selection
let gameState = 1;

const setUpBoard = () => {
    pieces.forEach((piece) => {
        spawnPiece(piece);
        if (piece.colour === "white") {
            whiteOccupiedSpaces.push(piece.square);
        } else if (piece.colour === "black") {
            blackOccupiedSpaces.push(piece.square);
        }
    });
    displayWhoseMove(gameState);
}

const resetGame = () => {
    gameState = 1;
    clearBoard();
    clearOverlays();
    resetPiecePositions();
    setUpBoard();
}

const clearBoard = () => {
    let children = document.querySelectorAll(".piece");
    children.forEach((child) => {
        child.remove();
    })
    whiteOccupiedSpaces.length = 0;
    blackOccupiedSpaces.length = 0;
    console.log(whiteOccupiedSpaces);
}

const clearOverlays = () => {
    let children = document.querySelectorAll(".move");
    children.forEach((child) => {
        child.remove();
    })
}

const resetPiecePositions = () => {
    pieces[0].square = [0,0];
    pieces[1].square = [1,0];
    pieces[2].square = [2,0];
    pieces[3].square = [3,0];
    pieces[4].square = [4,0];
    pieces[5].square = [5,0];
    pieces[6].square = [6,0];
    pieces[7].square = [7,0];
    pieces[8].square = [0,1];
    pieces[9].square = [1,1];
    pieces[10].square = [2,1];
    pieces[11].square = [3,1];
    pieces[12].square = [4,1];
    pieces[13].square = [5,1];
    pieces[14].square = [6,1];
    pieces[15].square = [7,1];
    pieces[16].square = [0,7];
    pieces[17].square = [1,7];
    pieces[18].square = [2,7];
    pieces[19].square = [3,7];
    pieces[20].square = [4,7];
    pieces[21].square = [5,7];
    pieces[22].square = [6,7];
    pieces[23].square = [7,7];
    pieces[24].square = [0,6];
    pieces[25].square = [1,6];
    pieces[26].square = [2,6];
    pieces[27].square = [3,6];
    pieces[28].square = [4,6];
    pieces[29].square = [5,6];
    pieces[30].square = [6,6];
    pieces[31].square = [7,6];
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

const spawnOverlay = (xy, type) => {
    let square = convertSquareXYtoClass(xy);
    gameBoard.innerHTML +=
        `<div class="move ${square}">
            <div class="move__${type}"></div>
        </div>`   
}

const displayWhoseMove = (gameState) => {
    switch (gameState) {
        case 1:
            gameDescription.innerText = "White piece selection";
            break;
        case 2:
            gameDescription.innerText = "White move choice";
            break;
        case 3:
            gameDescription.innerText = "Black piece selection";
            break;
        case 4:
            gameDescription.innerText = "Black move choice";
            break;
    }
}

const getPieceObject = (givenName) => {
    return pieces.find(piece => piece.name === givenName)
}

const buildMoveArrays = (piece) => {
    let startingPosition = piece.square;
    let player = null;
    let opponent = null;
    if (piece.colour === "white") {
        player = whiteOccupiedSpaces;
        opponent = blackOccupiedSpaces;
    } else {
        player = blackOccupiedSpaces;
        opponent = whiteOccupiedSpaces;
    }
    let moves = []
    let captures = []
    switch (piece.ruleset) {
        case "rook":
            // get possible moves on empty board
            // [right, left, up, down]
            moves = [[],[],[],[]];
            for (let i = 1; i < (8 - startingPosition[0]); i++) {
                moves[0].push([(startingPosition[0] + i), startingPosition[1]]);
            }
            for (let i = 1; i < (startingPosition[0] + 1); i++) {
                moves[1].push([(startingPosition[0] - i), startingPosition[1]])
            }
            for (let i = 1; i < (8 - startingPosition[1]); i++) {
                moves[2].push([startingPosition[0], (startingPosition[1] + i)]);
            }
            for (let i = 1; i < (startingPosition[1] + 1); i++) {
                moves[3].push([startingPosition[0], (startingPosition[1] - i)]);
            }
            // check against allied pieces for blockers
            moves.forEach((direction) => {
                direction.forEach((move, index) => {
                    player.forEach((space) => {
                        if ((space[0] == move[0]) && (space[1] == move[1])) {
                            direction.length = index;
                        }
                    })
                });
            })
            // check against opponent pieces for captures
            moves.forEach((direction) => {
                direction.forEach((move, index) => {
                   opponent.forEach((space) => {
                        if ((space[0] == move[0]) && (space[1] == move[1])) {
                            direction.length = index;
                            captures.push(move);
                        }
                    })
                })
            })
            // condense moves into one array
            moves = moves[0].concat(moves[1], moves[2], moves[3]);
            break;
        case "knight":
            break;
        case "bishop":
            break;
        case "queen":
            break;
        case "king":
            break;
        case "white-pawn":
            // get possible moves on empty board
            moves.push([startingPosition[0], (startingPosition[1] + 1)]);
            if (startingPosition[1] == 1) {
                moves.push([startingPosition[0], (startingPosition[1] + 2)]);
            }
            // check against allied pieces for blockers
            for (let i = 0; i < moves.length; i++) {
                if (pieces.includes(moves[i])) {
                    moves.length = i;
                }
            };
            // check against opponent pieces for captures
            console.log(moves);

            break;
        case "black-pawn":
            break;
    }
    return ([moves, captures]);
}

const displayMoves = (moves) => {
    moves[0].forEach((move) => {
        spawnOverlay(move, "empty");
    })
    moves[1].forEach((move) => {
        spawnOverlay(move, "capture");
    });
}

const convertSquareClassToXY = (square) => {
    return [parseInt(square[6]),parseInt(square[7])]
}
const convertSquareXYtoClass = (xy) => {
    return `square${xy[0]}${xy[1]}`
}

const onPieceClick = (event, state) => {
    switch (state) {
        case 1:
            let piece = getPieceObject(event.target.id);
            currentPiece = piece;
            let moveArrays = buildMoveArrays(piece);
            displayMoves(moveArrays);
            gameState ++;
            break;
        case 2:
            break;
        case 3:
            console.log(event.target.id);
            gameState ++;
            break;
        case 4:
            break;
    }
}

const onOverlayClick = (event, type) => {
    clearOverlays();
    let playerSpaces = null;
    let opponentSpaces = null;
    if (currentPiece.colour === "white") {
        playerSpaces = whiteOccupiedSpaces;
        opponentSpaces = blackOccupiedSpaces;
    } else {
        playerSpaces = blackOccupiedSpaces;
        opponentSpaces = whiteOccupiedSpaces;
    }
    let movingSprite = document.getElementById(currentPiece.name);
    let oldLocationClass = convertSquareXYtoClass(currentPiece.square);
    let newLocationClass = event.target.parentElement.classList[1];
    let newLocationXY = convertSquareClassToXY(newLocationClass);
    if  (type === "capture") {
        let capturedPiece = document.querySelectorAll(`.${newLocationClass}`)[1];
        capturedPiece.remove()

        newLocationXY = [parseInt(newLocationXY[0]), parseInt(newLocationXY[1])];
        let newLocationOpponentIndex = 0;
        // for some reason, indexOf() doesn't work here, while it does just below
        opponentSpaces.forEach((space, index) => {
            if ((newLocationXY[0] === space[0]) && (newLocationXY[1] === space[1])) {
                newLocationOpponentIndex =  index;
            }
        });
        opponentSpaces.splice(newLocationOpponentIndex, 1);
    }
    movingSprite.classList.remove(oldLocationClass);
    movingSprite.classList.add(newLocationClass);
    console.log("moving sprite");
    console.log(movingSprite);
    
    let oldLocationPlayerIndex = playerSpaces.indexOf(currentPiece.square);
    playerSpaces.splice(oldLocationPlayerIndex, 1);
    playerSpaces.push(newLocationXY);
    console.log("player spaces");
    console.log(playerSpaces);
    console.log("opponent spaces");
    console.log(opponentSpaces);
    
    currentPiece.square = newLocationXY;
    console.log("current piece");
    console.log(currentPiece);
    
    gameState ++;
    currentPiece = null;
}


setUpBoard();

document.addEventListener("click", function (event) {
    console.log(event.target);
    if (event.target.matches(".piece__button")) {
        onPieceClick(event, gameState);
    } else if (event.target.matches(".move__empty")) {
        onOverlayClick(event, "empty");
    } else if (event.target.matches(".move__capture")) {
        onOverlayClick(event, "capture");;
    } else if (event.target.matches(".reset")) {
        resetGame();
    } else {
        if (gameState % 2 == 0) {
            gameState --;
            clearOverlays();
        } 
    }
    displayWhoseMove(gameState);
});
