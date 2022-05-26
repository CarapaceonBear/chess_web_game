# chess_web_game
## Javascript implementation of chess
-----------------------------------------------------------------------------------------------
## Initial Design
The board will be a CSS grid display.<br>
Each piece will be a HTML div, with an image and a button, with a class dictating its grid-area.<br>
<br>
When a piece is clicked, it will run functions on its paired object:<br>
<pre>
  king-black {
    square: A4 or [0, 3],
    ruleset: "king"
    }
</pre>

Called functions should display available moves:
- squares the piece can move to (add overlay squares to innerHTML)
- these squares should be restricted by blocking pieces
- opponent's pieces which can be captured

The script should store the piece reference, and wait for a selection.<br>

One the selection is made, update the piece's position:
- its "square" value in the object.
- the image's class which dictates its grid-area.

When each piece is added to, removed from, or moved around the board, it should update an array of occupied spaces.<br>
This will be required for showing possible moves. There should be an array for each player.<br>
<br>
The game is won by capturing the opponent's king.

-----------------------------------------------------------------------------------------------
## Rulesets

White pawn:
- can only change the y-value by +1. +2 if it's the first time it's moving.
- if a piece blocks that square, it cannot move.
- if an opponent occupies (y+1, x+-1), ie. diagonally upwards, the pawn can capture it.

Black pawn:
- the same, but the downwards.

Bishop:
- can move to (y+1, x+1), (y+2, x+2), etc in all four directions.
- each direction should be an array, and each array should be checked along for blocking pieces.
- after blockers, don't show subsequent positions in the array as options.
- if the blocker is an opponent's piece, show it as a valid capture.

Castle:
- can change y OR x to any value, provided it isn't blocked.
- treat the options as an array, run the same as for bishops.

Knight:
- can move to (y+-2, x+-1) or (y+-1, x+-2).
- check each option for blockers or opponent's pieces.

Queen:
- has all the options for bishop and castle.
- run them one after the other and show all results.

King:
- can move to (y+-1, x), (y+-1, x+-1) or (y, x+-1).
- check each option for blockers or opponent's pieces.
- additionally, must check each position for danger from opponent's pieces. Run a move-check for each opponent's piece, returning if it contains the potential move.

-----------------------------------------------------------------------------------------------
## JS PsuedoCode
<pre>
initialise consts for each piece button
eg const blackPawnOne = document.getElementById("black-pawn-one");

initialise event listeners for each, linking to the display moves function, passing in its object
eg blackPawnOne.addEventListener("click", manageChosenPiece(event, blackPawnOneObject));

const blackPawnOneObject = {
  square: [0, 1],
  ruleset: "black-pawn"
};
// on game-start, fill these arrays with the starting values
const whiteOccupiedSpaces = [];
const blackOccupiedSpaces = [];

let currentPiece = null;
let currentPieceObject = null;
// would rather use a finite-state machine, but JS doesn't seem to support enums
let canChooseMove = false;

const manageChosenPiece = (event, pieceObject) => {
  if (! canChooseMove) {
    // need to keep the piece in memory while it waits for the move selection
    let currentPiece = event.target;
    let currentPieceObject = pieceObject;

    let currentSquare = pieceObject.square;
    let ruleset = pieceObject.ruleset;
    // buildMoveArrays should return two arrays: one of possible empty squares, and one of possible captures
    let possibleMoves = buildMoveArrays(currentSquare, ruleset);
    displayAvailableMoves(possibleMoves);
    
    canChooseMove = true;
    
  } else {
    currentPiece.square = event.target.value
    // remove current grid:area class, add the new one
    // remove and add to the relevant occupiedSquare array
    // if capturing a piece, need to grab the piece by Id, and remove it.
    canChooseMove = false;
  }

//
// this needs fleshing out, but I need to see it in action
//
const buildMoveArrays = (startingPosition, ruleset) = > {
  switch (ruleset) {
    case "black-pawn":
      // the only option is one square downwards
      let emptySquares = [(startingPosition[0] - 1, startingPosition[1])]
      emptySquares.filter((potential) => {
        if (! blackOccpiedSpaces.includes(potential)) {
          return
        }
      }        
      let opponentCaptures = [(startingPosition[0] - 1, startingPosition[1] + 1), (startingPosition[0] - 1, startingPosition[1] - 1)]
      opponentCaptures.filter((capture) => {
        if (whiteOccupiedSpaces.includes(capture)) {
          return
        }
      }
  }

const displayAvailableMoves = (2DArray) => {
  for each (
    grid.innerHTML += red square with grid:area class
    // red squares should also have a unified class, so they can be targeted for removal
    // red squares should have a button and eventListener on creation
    // should have a value for which square they're in
  )
}
