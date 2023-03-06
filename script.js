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

function GameModel() {
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

  const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const getGameBoard = () => gameBoard;

  const getWinConditions = () => winConditions;

  return {
    players,
    getGameBoard,
  };
}

function GameController() {
  const game = GameModel();

  const addToken = (index, player) => {
    game.getGameBoard().splice(index, 1, player);
  };

  const switchCurrentPlayer = () => {
    let currentPlayer = game.players[0];
    currentPlayer === players[0]
      ? (currentPlayer = players[1])
      : (currentPlayer = players[0]);
  };

  const getCurrentPlayer = () => currentPlayer;

  const playRound = (index) => {};

  const checkForWinner = () => {};

  return {
    playRound,
    checkForWinner,
  };
}

(function GameUI() {
  const game = GameController();
  const boardSize = 9;

  const gameContainer = document.querySelector(".game");

  /* create game cells */
  for (let index = 0; index < boardSize; index++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-index", index);

    /* listens for cliick to start game */
    cell.addEventListener("click", (e) => {
      game.playRound(e.target.getAttribute("data-index"));
    });
    gameContainer.appendChild(cell);
  }
})();
