/* Tic Tac Toe game
Player 1 clicks square

player functionality {
player object {
name: player 1/2
token: 1/2
}   

    player array = [player1, player2]

    switch player turn

    get current player
  
}
game functionality {

    game board = [0,0,0,0,0,0,0,0,0]

    add token to game board 

    stop game
}

GameScreen {
Append player 1's token to the
square clicked
update player turn}
*/

/* ----todo---
 * win conditions
 *dom stuff
 */

function Players() {
  /* array of player objects */
  const players = [
    {
      name: "player1",
      token: 1,
    },
    {
      name: "player2",
      token: 2,
    },
  ];

  let currentPlayer = players[0];

  const switchCurrentPlayer = () => {
    currentPlayer === players[0]
      ? (currentPlayer = players[1])
      : (currentPlayer = players[0]);
  };

  /* current player var is mutable */
  const getCurrentPlayer = () => currentPlayer;

  return {
    switchCurrentPlayer,
    getCurrentPlayer,
  };
}

function GameModel() {
  const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const addToken = (index, player) => {
    gameBoard.splice(index, 1, player);
  };

  const getGameBoard = () => gameBoard;

  return {
    addToken,
    getGameBoard,
  };
}

function GameController() {
  const game = GameModel();
  const player = Players();

  const stopGame = (currentBoard) => {
    /* check rows */
    if (
      currentBoard[0] === currentBoard[1] &&
      currentBoard[0] === currentBoard[2]
    )
      return true;

    if (
      currentBoard[3] === currentBoard[4] &&
      currentBoard[3] === currentBoard[5]
    )
      return true;

    if (
      currentBoard[6] === currentBoard[7] &&
      currentBoard[6] === currentBoard[8]
    )
      return true;

    /* check columns */
    if (
      currentBoard[0] === currentBoard[3] &&
      currentBoard[0] === currentBoard[6]
    )
      return true;
    if (
      currentBoard[1] === currentBoard[4] &&
      currentBoard[1] === currentBoard[7]
    )
      return true;
    if (
      currentBoard[2] === currentBoard[5] &&
      currentBoard[2] === currentBoard[8]
    )
      return true;
    /* check diagonals */
    if (
      currentBoard[0] === currentBoard[4] &&
      currentBoard[0] === currentBoard[8]
    )
      return true;
    if (
      currentBoard[2] === currentBoard[4] &&
      currentBoard[2] === currentBoard[6]
    )
      return true;
  };

  const playRound = () => {};

  return {
    stopGame,
    playRound,
  };
}

(function GameUI() {
  const players = Players();
  const game = GameModel();
  const boardSize = 9;

  const gameContainer = document.querySelector(".game");

  /* create game cells */
  for (let index = 0; index < boardSize; index++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-index", index);
    cell.addEventListener("click", game.playRound);
    gameContainer.appendChild(cell);
  }
})();
