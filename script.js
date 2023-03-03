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

function GameController() {
  const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const addToken = (index, player) => {
    gameBoard.splice(index, 1, player.token);
  };

  const getGameBoard = () => gameBoard;

  const stopGame = () => {};

  return {
    addToken,
    getGameBoard,
    stopGame,
  };
}

(function GameUI() {
  const players = Players();
  const game = GameController();
  const boardSize = 9;

  const gameContainer = document.querySelector(".game");

  /* creates game cells */
  for (let index = 0; index < boardSize; index++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-index", index);
    cell.addEventListener("click", game.playRound);
    gameContainer.appendChild(cell);
  }

  return {};
})();

window.addEventListener("click", () => {});
