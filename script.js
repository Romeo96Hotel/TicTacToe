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

(function GameUI() {
  const game = GameController();
  const gameContainer = document.querySelector(".game");
  const boardSize = game.currentBoard().length;

  const renderBoard = () => {
    gameContainer.innerHTML = "";
    /* create game cells */
    for (let index = 0; index < boardSize; index++) {
      const cell = document.createElement("button");

      cell.classList.add("cell");

      cell.setAttribute("data-index", index);

      gameContainer.appendChild(cell);
    }
  };

  function clickHandler(e) {}

  renderBoard();
})();

function GameBoard() {
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
  const gameBoard = GameBoard();
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

  const playRound = (index) => {
    let winner = false;

    if (!gameBoard[index] === 0) return;
    gameBoard.addToken(index, currentPlayer.token);

    if (checkForWinner() === true) {
      winner = true;
      return winner;
    }

    switchCurrentPlayer();

    return winner;
  };

  const switchCurrentPlayer = () => {
    currentPlayer === players[0]
      ? (currentPlayer = players[1])
      : (currentPlayer = players[0]);
  };

  const getCurrentPlayer = () => currentPlayer;

  const checkForWinner = () => {
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

    let winner = false;

    for (let i = 0; i < winConditions.length; i++) {
      const row = winConditions[i];
      const currentBoard = gameBoard.getGameBoard();
      const indexA = currentBoard[row[0]];
      const indexB = currentBoard[row[1]];
      const indexC = currentBoard[row[2]];

      const indexArray = [];
      indexArray.push(indexA, indexB, indexC);

      if (indexArray.includes(0)) {
        continue;
      }

      if (indexArray.every((index) => index === currentPlayer.token)) {
        winner = true;
        break;
      }
    }

    return winner;
  };

  return {
    playRound,
    getCurrentPlayer,
    currentBoard: gameBoard.getGameBoard,
  };
}
