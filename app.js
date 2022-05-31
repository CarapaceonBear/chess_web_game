const game = document.querySelector(".main");
const gameBoard = document.querySelector(".main__board");
const gameDescription = document.querySelector(".header__description")
const startScreen = document.querySelector("#start-screen");
const endScreen = document.querySelector("#end-screen");
const resetButton = document.querySelector(".header__reset");
const title = document.querySelector(".header__title");

const pieces = [
    {
        name: "whiteRookOne",
        colour: "white",
        square: [0,0],
        ruleset: "rook",
        image: "w_rook_svg_withShadow.svg"
    },
    {
        name: "whiteKnightOne",
        colour: "white",
        square: [1,0],
        ruleset: "knight",
        image: "w_knight_svg_withShadow.svg"
    },
    {
        name: "whiteBishopOne",
        colour: "white",
        square: [2,0],
        ruleset: "bishop",
        image: "w_bishop_svg_withShadow.svg"
    },
    {
        name: "whiteQueen",
        colour: "white",
        square: [3,0],
        ruleset: "queen",
        image: "w_queen_svg_withShadow.svg"
    },
    {
        name: "whiteKing",
        colour: "white",
        square: [4,0],
        ruleset: "king",
        image: "w_king_svg_withShadow.svg"
    },
    {
        name: "whiteBishopTwo",
        colour: "white",
        square: [5,0],
        ruleset: "bishop",
        image: "w_bishop_svg_withShadow.svg"
    },
    {
        name: "whiteKnightTwo",
        colour: "white",
        square: [6,0],
        ruleset: "knight",
        image: "w_knight_svg_withShadow.svg"
    },
    {
        name: "whiteRookTwo",
        colour: "white",
        square: [7,0],
        ruleset: "rook",
        image: "w_rook_svg_withShadow.svg"
    },
    {
        name: "whitePawnOne",
        colour: "white",
        square: [0,1],
        ruleset: "pawn",
        image: "w_pawn_svg_withShadow.svg"
    },
    {
        name: "whitePawnTwo",
        colour: "white",
        square: [1,1],
        ruleset: "pawn",
        image: "w_pawn_svg_withShadow.svg"
    },
    {
        name: "whitePawnThree",
        colour: "white",
        square: [2,1],
        ruleset: "pawn",
        image: "w_pawn_svg_withShadow.svg"
    },
    {
        name: "whitePawnFour",
        colour: "white",
        square: [3,1],
        ruleset: "pawn",
        image: "w_pawn_svg_withShadow.svg"
    },
    {
        name: "whitePawnFive",
        colour: "white",
        square: [4,1],
        ruleset: "pawn",
        image: "w_pawn_svg_withShadow.svg"
    },
    {
        name: "whitePawnSix",
        colour: "white",
        square: [5,1],
        ruleset: "pawn",
        image: "w_pawn_svg_withShadow.svg"
    },
    {
        name: "whitePawnSeven",
        colour: "white",
        square: [6,1],
        ruleset: "pawn",
        image: "w_pawn_svg_withShadow.svg"
    },
    {
        name: "whitePawnEight",
        colour: "white",
        square: [7,1],
        ruleset: "pawn",
        image: "w_pawn_svg_withShadow.svg"
    },
    {
        name: "blackRookOne",
        colour: "black",
        square: [0,7],
        ruleset: "rook",
        image: "b_rook_svg_withShadow.svg"
    },
    {
        name: "blackKnightOne",
        colour: "black",
        square: [1,7],
        ruleset: "knight",
        image: "b_knight_svg_withShadow.svg"
    },
    {
        name: "blackBishopOne",
        colour: "black",
        square: [2,7],
        ruleset: "bishop",
        image: "b_bishop_svg_withShadow.svg"
    },
    {
        name: "blackQueen",
        colour: "black",
        square: [3,7],
        ruleset: "queen",
        image: "b_queen_svg_withShadow.svg"
    },
    {
        name: "blackKing",
        colour: "black",
        square: [4,7],
        ruleset: "king",
        image: "b_king_svg_withShadow.svg"
    },
    {
        name: "blackBishopTwo",
        colour: "black",
        square: [5,7],
        ruleset: "bishop",
        image: "b_bishop_svg_withShadow.svg"
    },
    {
        name: "blackKnightTwo",
        colour: "black",
        square: [6,7],
        ruleset: "knight",
        image: "b_knight_svg_withShadow.svg"
    },
    {
        name: "blackRookTwo",
        colour: "black",
        square: [7,7],
        ruleset: "rook",
        image: "b_rook_svg_withShadow.svg"
    },
    {
        name: "blackPawnOne",
        colour: "black",
        square: [0,6],
        ruleset: "pawn",
        image: "b_pawn_svg_withShadow.svg"
    },
    {
        name: "blackPawnTwo",
        colour: "black",
        square: [1,6],
        ruleset: "pawn",
        image: "b_pawn_svg_withShadow.svg"
    },
    {
        name: "blackPawnThree",
        colour: "black",
        square: [2,6],
        ruleset: "pawn",
        image: "b_pawn_svg_withShadow.svg"
    },
    {
        name: "blackPawnFour",
        colour: "black",
        square: [3,6],
        ruleset: "pawn",
        image: "b_pawn_svg_withShadow.svg"
    },
    {
        name: "blackPawnFive",
        colour: "black",
        square: [4,6],
        ruleset: "pawn",
        image: "b_pawn_svg_withShadow.svg"
    },
    {
        name: "blackPawnSix",
        colour: "black",
        square: [5,6],
        ruleset: "pawn",
        image: "b_pawn_svg_withShadow.svg"
    },
    {
        name: "blackPawnSeven",
        colour: "black",
        square: [6,6],
        ruleset: "pawn",
        image: "b_pawn_svg_withShadow.svg"
    },
    {
        name: "blackPawnEight",
        colour: "black",
        square: [7,6],
        ruleset: "pawn",
        image: "b_pawn_svg_withShadow.svg"
    }
];

const whiteOccupiedSpaces = [];
const blackOccupiedSpaces = [];
let currentPiece = null;

// game-state
//  0 : game setup
//  1 : white piece selection
//  2 : white move selection
//  3 : black piece selection
//  4 : black move selection
//  5 : end of game
let gameState = 0;

const showStartOverlay = () => {
    startScreen.classList.remove("main__overlay--hidden");
    title.classList.remove("header__title--hidden");
    resetButton.classList.add("header__reset--hidden");
}

const setUpBoard = () => {
    title.classList.add("header__title--hidden");
    resetButton.classList.remove("header__reset--hidden");
    clearOverlays();
    gameState = 1;
    pieces.forEach((piece) => {
        spawnPiece(piece);
        if (piece.colour === "white") {
            whiteOccupiedSpaces.push(piece.square);
        } else if (piece.colour === "black") {
            blackOccupiedSpaces.push(piece.square);
        }
    });
    makePiecesSelectable(gameState);
    displayWhoseMove(gameState);
}

const makePiecesSelectable = (state) => {
    let pieces = document.querySelectorAll(".piece");
    switch (state) {
        case 1:
            pieces.forEach((piece) => {
                let id = piece.id.substring(0, 5);
                if (id == "white") {
                    piece.classList.add("selectable");
                } else {
                    piece.classList.remove("selectable");
                }
            });
            break;
        case 2:
            pieces.forEach((piece) => {
                piece.classList.remove("selectable");
            })
            break;
        case 3:
            pieces.forEach((piece) => {
                let id = piece.id.substring(0, 5);
                if (id == "black") {
                    piece.classList.add("selectable");
                } else {
                    piece.classList.remove("selectable");
                }
            });
            break;
        case 4:
            pieces.forEach((piece) => {
                piece.classList.remove("selectable");
            })
            break;
    }
}

const resetGame = () => {
    gameState = 0;
    clearBoard();
    clearOverlays();
    resetPiecePositions();
    showStartOverlay();
}

const clearBoard = () => {
    let children = document.querySelectorAll(".piece");
    children.forEach((child) => {
        child.remove();
    })
    whiteOccupiedSpaces.length = 0;
    blackOccupiedSpaces.length = 0;
}

const clearOverlays = () => {
    let children = document.querySelectorAll(".move");
    children.forEach((child) => {
        child.remove();
    })
    startScreen.classList.add("main__overlay--hidden");
    endScreen.classList.add("main__overlay--hidden");
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
        case 0:
            gameDescription.innerText = "";
            break;
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
        case 5:
            gameDescription.innerText = "";
    }
}

const getPieceObject = (givenName) => {
    return pieces.find(piece => piece.name === givenName)
}

const buildMoveArrays = (piece, playerSpaces, opponentSpaces) => {
    let startingPosition = piece.square;
    let moves = [];
    let captures = [];
    switch (piece.ruleset) {
        case "rook":
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
            return checkDirectionsForBlockers(moves, playerSpaces, opponentSpaces);
        case "knight":
            // doesn't use directional arrays like the others, must check each of eight spots
            if (startingPosition[0] >= 1) {
                startingPosition[1] >= 2 ? moves.push([(startingPosition[0] - 1), (startingPosition[1] - 2)]) : null;
                startingPosition[1] <= 5 ? moves.push([(startingPosition[0] - 1), (startingPosition[1] + 2)]) : null;
                if (startingPosition[0] >= 2) {
                    startingPosition[1] >= 1 ? moves.push([(startingPosition[0] - 2), (startingPosition[1] - 1)]) : null;
                    startingPosition[1] <= 6 ? moves.push([(startingPosition[0] - 2), (startingPosition[1] + 1)]) : null;
                }
            }
            if (startingPosition[0] <= 6) {
                startingPosition[1] >= 2 ? moves.push([(startingPosition[0] + 1), (startingPosition[1] - 2)]) : null;
                startingPosition[1] <= 5 ? moves.push([(startingPosition[0] + 1), (startingPosition[1] + 2)]) : null;
                if (startingPosition[0] <= 5) {
                    startingPosition[1] >= 1 ? moves.push([(startingPosition[0] + 2), (startingPosition[1] - 1)]) : null;
                    startingPosition[1] <= 6 ? moves.push([(startingPosition[0] + 2), (startingPosition[1] + 1)]) : null;
                }
            }
            return checkSpacesForBlockers(moves, playerSpaces, opponentSpaces);
        case "bishop":
            // [+x+y, +x-y, -x+y, -x-y]
            moves = [[],[],[],[]];
            for (let i = 1; (i < (8 - startingPosition[0]) && i < (8 - startingPosition[1])); i++) {
                moves[0].push([(startingPosition[0] + i), (startingPosition[1] + i)]);
            }
            for (let i = 1; (i < (8 - startingPosition[0]) && i < (startingPosition[1] + 1)); i++) {
                moves[1].push([(startingPosition[0] + i), (startingPosition[1] - i)]);
            }
            for (let i = 1; (i < (startingPosition[0] + 1) && i < (8 - startingPosition[1])); i++) {
                moves[2].push([(startingPosition[0] - i), (startingPosition[1] + i)]);
            }
            for (let i = 1; (i < (startingPosition[0] + 1) && i < (startingPosition[1] + 1)); i++) {
                moves[3].push([(startingPosition[0] - i), (startingPosition[1] - i)]);
            }
            return checkDirectionsForBlockers(moves, playerSpaces, opponentSpaces);
        case "queen":
            // [right, left, up, down, +x+y, +x-y, -x+y, -x-y]
            moves = [[],[],[],[],[],[],[],[]];
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
            for (let i = 1; (i < (8 - startingPosition[0]) && i < (8 - startingPosition[1])); i++) {
                moves[4].push([(startingPosition[0] + i), (startingPosition[1] + i)]);
            }
            for (let i = 1; (i < (8 - startingPosition[0]) && i < (startingPosition[1] + 1)); i++) {
                moves[5].push([(startingPosition[0] + i), (startingPosition[1] - i)]);
            }
            for (let i = 1; (i < (startingPosition[0] + 1) && i < (8 - startingPosition[1])); i++) {
                moves[6].push([(startingPosition[0] - i), (startingPosition[1] + i)]);
            }
            for (let i = 1; (i < (startingPosition[0] + 1) && i < (startingPosition[1] + 1)); i++) {
                moves[7].push([(startingPosition[0] - i), (startingPosition[1] - i)]);
            }
            return checkDirectionsForBlockers(moves, playerSpaces, opponentSpaces);
        case "king":
            // doesn't use directional arrays like the others, must check each of eight spots
            startingPosition[0] >= 1 ? moves.push([(startingPosition[0] - 1), startingPosition[1]]) : null;
            startingPosition[0] <= 6 ? moves.push([(startingPosition[0] + 1), startingPosition[1]]) : null;
            startingPosition[1] >= 1 ? moves.push([startingPosition[0], (startingPosition[1] - 1)]) : null;
            startingPosition[1] <= 6 ? moves.push([startingPosition[0], (startingPosition[1] + 1)]) : null;
            startingPosition[0] >= 1 && startingPosition[1] >= 1 ?
                moves.push([(startingPosition[0] - 1), (startingPosition[1] - 1)]) : null;
            startingPosition[0] >= 1 && startingPosition[1] <= 6 ?
                moves.push([(startingPosition[0] - 1), (startingPosition[1] + 1)]) : null;
            startingPosition[0] <= 6 && startingPosition[1] >= 1 ?
                moves.push([(startingPosition[0] + 1), (startingPosition[1] - 1)]) : null;
            startingPosition[0] <= 6 && startingPosition[1] <= 6 ?
                moves.push([(startingPosition[0] + 1), (startingPosition[1] + 1)]) : null;
            return checkSpacesForBlockers(moves, playerSpaces, opponentSpaces);
        case "pawn":
            if (piece.colour == "white") {
                moves.push([startingPosition[0], (startingPosition[1] + 1)]);
                if (startingPosition[1] == 1) {
                    moves.push([startingPosition[0], (startingPosition[1] + 2)]);
                }
            } else {
                moves.push([startingPosition[0], (startingPosition[1] - 1)]);
                if (startingPosition[1] == 6) {
                    moves.push([startingPosition[0], (startingPosition[1] - 2)]);
                }
            }
            // check all pieces for blockers
            let allPieces = playerSpaces.concat(opponentSpaces);
            moves.forEach((move, index) => {
                allPieces.forEach((space) => {
                    if ((space[0] == move[0]) && (space[1] == move[1])) {
                        moves.length = index;
                    }
                });
            })
            // check diagonals for captures
            if (piece.colour == "white") {
                opponentSpaces.forEach((space) => {
                    if (((startingPosition[0] + 1) === space[0]) && ((startingPosition[1] + 1) === space[1])) {
                        captures.push(space);
                    } else if (((startingPosition[0] - 1) === space[0]) && ((startingPosition[1] + 1) === space[1])) {
                        captures.push(space);
                    }
                });
            } else {
                opponentSpaces.forEach((space) => {
                    if (((startingPosition[0] + 1) === space[0]) && ((startingPosition[1] - 1) === space[1])) {
                        captures.push(space);
                    } else if (((startingPosition[0] - 1) === space[0]) && ((startingPosition[1] - 1) === space[1])) {
                        captures.push(space);
                    }
                });
            }
            return ([moves, captures]);
    }
}

const checkDirectionsForBlockers = (array, playerSpaces, opponentSpaces) => {
    let moves = array;
    let captures = [];
    moves.forEach((direction) => {
        direction.forEach((move, index) => {
            playerSpaces.forEach((space) => {
                if ((space[0] == move[0]) && (space[1] == move[1])) {
                    direction.length = index;
                }
            });
            opponentSpaces.forEach((space) => {
                if ((space[0] == move[0]) && (space[1] == move[1])) {
                    direction.length = index;
                    captures.push(move);
                }
            });
        });
    })
    let returnMoves = moves[0];
    for (i = 1; i < moves.length; i++) {
        returnMoves.push(...moves[i]);
    }
    return ([returnMoves, captures]);
}

const checkSpacesForBlockers = (array, playerSpaces, opponentSpaces) => {
    let moves = array;
    let returnMoves = [];
    let captures = [];
    moves.forEach((move) => {
        let emptySpace = true;
        playerSpaces.forEach((space) => {
            if ((space[0] == move[0]) && (space[1] == move[1])) {
                emptySpace = false;
            }
        });
        opponentSpaces.forEach((space) => {
            if ((space[0] == move[0]) && (space[1] == move[1])) {
                captures.push(move)
            }
        });
        if (emptySpace) {
            returnMoves.push(move);
        }
    });
    return ([returnMoves, captures]);
}

// NEED TO MODIFY IF KING IS THE ONE MOVING
const checkIfKingInDanger = (moveArray, playerSpaces, opponentSpaces) => {
    let finalMoves = [];
    let finalCaptures = [];
    moveArray[0].forEach((move) => {
        let isCheck = false;
        // potential board state, as arrays
        let newPlayerBoard = playerSpaces.filter((space) => {
            return space != currentPiece.square
        });
        newPlayerBoard.push(move);
        // current active pieces
        let spritesOnBoard = document.querySelectorAll(".piece");
        if (currentPiece.colour === "white") {
            spritesOnBoard = Array.from(spritesOnBoard).filter((piece) => {
                return piece.id[0] == "b";
            })
        } else {
            spritesOnBoard = Array.from(spritesOnBoard).filter((piece) => {
                return piece.id[0] == "w";
            })
        }
        // possible piece moves, do they threaten the king?
        spritesOnBoard.forEach((sprite) => {
            let piece = getPieceObject(sprite.id);
            let moveArrays = buildMoveArrays(piece, opponentSpaces, newPlayerBoard);
            if (moveArrays[1].length > 0) {
                moveArrays[1].forEach((capture) => {
                    if (currentPiece.colour === "white") {
                        if (currentPiece.ruleset === "king") {
                            if ((capture[0] == move[0]) && (capture[1] == move[1])) {
                                isCheck = true;
                            }
                        } else {
                            if ((capture[0] == pieces[4].square[0]) && (capture[1] == pieces[4].square[1])) {
                                isCheck = true;
                            }
                        }
                    } else {
                        if (currentPiece.ruleset === "king") {
                            if ((capture[0] == move[0]) && (capture[1] == move[1])) {
                                isCheck = true;
                            }
                        } else {
                            if ((capture[0] == pieces[20].square[0]) && (capture[1] == pieces[20].square[1])) {
                                isCheck = true;
                            }
                        }
                    }
                })

            }
        })
        ! isCheck ? finalMoves.push(move) : null;
    })

    moveArray[1].forEach((capture) => {
        let isCheck = false;
        // potential board state, as arrays
        let newPlayerBoard = playerSpaces.filter((space) => {
            return space != currentPiece.square
        });
        newPlayerBoard.push(capture);
        let newOpponentBoard = opponentSpaces.filter((space) => {
            return ((space[0] != capture[0]) || (space[1] != capture[1]));
        });
        // current active pieces
        let spritesOnBoard = document.querySelectorAll(".piece");
        if (currentPiece.colour === "white") {
            spritesOnBoard = Array.from(spritesOnBoard).filter((piece) => {
                return piece.id[0] == "b";
            })
        } else {
            spritesOnBoard = Array.from(spritesOnBoard).filter((piece) => {
                return piece.id[0] == "w";
            })
        }
        let captureClass = convertSquareXYtoClass(capture);
        let capturedPiece = document.querySelectorAll(`.${captureClass}`)[1];
        spritesOnBoard.splice(spritesOnBoard.indexOf(capturedPiece), 1);
        // possible piece moves, do they threaten the king?
        spritesOnBoard.forEach((sprite) => {
            let piece = getPieceObject(sprite.id);
            let moveArrays = buildMoveArrays(piece, newOpponentBoard, newPlayerBoard);
            if (moveArrays[1].length > 0) {
                moveArrays[1].forEach((captureX) => {
                    if (currentPiece.colour === "white") {
                        if (currentPiece.ruleset === "king") {
                            if ((capture[0] == captureX[0]) && (capture[1] == captureX[1])) {
                                isCheck = true;
                            }
                        } else {
                            if ((captureX[0] == pieces[4].square[0]) && (captureX[1] == pieces[4].square[1])) {
                                isCheck = true;
                            }
                        }
                    } else {
                        if (currentPiece.ruleset === "king") {
                            if ((capture[0] == captureX[0]) && (capture[1] == captureX[1])) {
                                isCheck = true;
                            }
                        } else {
                            if ((captureX[0] == pieces[20].square[0]) && (captureX[1] == pieces[20].square[1])) {
                                isCheck = true;
                            }
                        }
                    }
                })

            }
        })
        ! isCheck ? finalCaptures.push(capture) : null;
    });
    return ([finalMoves, finalCaptures]);
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

const onPieceClick = (piece, state) => {
    gameState = state;
    let playerSpaces = null;
    let opponentSpaces = null;
    if (piece.colour === "white") {
        playerSpaces = whiteOccupiedSpaces;
        opponentSpaces = blackOccupiedSpaces;
    } else {
        playerSpaces = blackOccupiedSpaces;
        opponentSpaces = whiteOccupiedSpaces;
    }
    let moveArrays = buildMoveArrays(piece, playerSpaces, opponentSpaces);
    moveArrays = checkIfKingInDanger(moveArrays, playerSpaces, opponentSpaces);
    if ((moveArrays[0].length == 0) && (moveArrays[1].length == 0)) {
        console.log("no possible moves");
        currentPiece = null;
        return;
    }
    displayMoves(moveArrays);
    gameState ++;
}


const onOverlayClick = async (event, type) => {
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
    animateMovement(movingSprite, oldLocationClass, newLocationClass);
    await new Promise(r => setTimeout(r, 800));
    if  (type === "capture") {
        let capturedPiece = document.querySelectorAll(`.${newLocationClass}`)[1];
        if (capturedPiece.id === "whiteKing") {
            endGame("Black");
            return;
        } else if (capturedPiece.id === "blackKing") {
            endGame("White");
            return;
        };
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
    
    let oldLocationPlayerIndex = playerSpaces.indexOf(currentPiece.square);
    playerSpaces.splice(oldLocationPlayerIndex, 1);
    playerSpaces.push(newLocationXY);

    currentPiece.square = newLocationXY;
    
    gameState ++;
    if (gameState > 4) {
        gameState = 1;
    };
    currentPiece = null;
    makePiecesSelectable(gameState);
    displayWhoseMove(gameState);
}

const animateMovement = async (sprite, oldLocation, newLocation) => {
    sprite.style.zIndex = "1";
    startingSquare = document.querySelectorAll(`.${oldLocation}`)[0];
    startingXY = startingSquare.getBoundingClientRect();
    endingSquare = document.querySelectorAll(`.${newLocation}`)[0];
    endingXY = endingSquare.getBoundingClientRect();
    sprite.style.transform = `translateX(${endingXY.x - startingXY.x}px)`;
    sprite.style.transform += `translateY(${endingXY.y - startingXY.y}px)`;
    await new Promise(r => setTimeout(r, 800));
    sprite.style.transition = "transform 0s"
    sprite.style.transform = `translateX(0px)`;
    sprite.style.transform += `translateY(0px)`;
    sprite.style.zIndex = "0";
}

const endGame = (winner) => {
    gameState = 5;
    endScreen.classList.remove("main__overlay--hidden");
    endScreen.innerHTML = 
        `<h2 class="main__overlay--text">
            ${winner} wins!
        </h2>`
}

showStartOverlay();

document.addEventListener("click", function (event) {
    if (event.target.matches(".reset")) {
        resetGame();
    }
    if (event.target.matches(".piece__button")) {
        currentPiece = getPieceObject(event.target.id);
    }
    switch (gameState) {
        case 0:
            if (event.target.matches("#two-player-button")) {
                setUpBoard();
            } else if (event.target.matches("#one-player-button")) {
                alert("I haven't made that yet!")
            }
            break;
        case 1:
            if ((event.target.matches(".piece__button")) 
            && (getPieceObject(event.target.id).colour == "white")) {
                onPieceClick(currentPiece, 1);
            }
            break;
        case 2:
            clearOverlays();
            if ((event.target.matches(".piece__button")) 
            && (getPieceObject(event.target.id).colour == "white")) {
                onPieceClick(currentPiece, 1);
            }
            if (event.target.matches(".move__empty")) {
                onOverlayClick(event, "empty");
            } else if (event.target.matches(".move__capture")) {
                onOverlayClick(event, "capture");
            } else {
                gameState --;
                currentPiece = null;
                clearOverlays();
            }
            break;
        case 3:
            if ((event.target.matches(".piece__button")) 
            && (currentPiece.colour == "black")) {
                onPieceClick(currentPiece, 3);
            }
            break;
        case 4:
            clearOverlays();
            if ((event.target.matches(".piece__button")) 
            && (currentPiece.colour == "black")) {
                onPieceClick(currentPiece, 3);
            } else if (event.target.matches(".move__empty")) {
                onOverlayClick(event, "empty");
            } else if (event.target.matches(".move__capture")) {
                onOverlayClick(event, "capture");
            } else {
                gameState --;
                currentPiece = null;
                clearOverlays();
            }
            break;
        case 5:
            break;
    }
    makePiecesSelectable(gameState);
    displayWhoseMove(gameState);
});
