(function GameUI() {
  const game = GameController();
  const gameContainer = document.querySelector(".game");
  const gameStatus = document.querySelector("#status");

  const renderBoard = () => {
    gameContainer.innerHTML = "";
    /* create game cells */
    for (let index = 0; index < game.currentBoard().length; index++) {
      const cell = document.createElement("div");

      cell.classList.add("cell");

      cell.setAttribute("data-index", index);

      gameContainer.appendChild(cell);
    }

    gameStatus.textContent = `${game.getCurrentPlayer().name}'s turn`;

    gameContainer.addEventListener("click", clickEventHandler);
  };

  /* prints board array to console */
  const printBoard = () => {
    console.log(board);
  };

  return {
    getBoard,
    insertToken,
    printBoard,
  };
}

  renderBoard();
})();

function GameBoard() {
  const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const addToken = (index, player) => {
    /* If gameboard has a token, do nothing */
    if (!gameBoard[index] === 0) return;

    gameBoard.splice(index, 1, player);
  };

  const getValue = () => value;

  return {
    addToken,
    getGameBoard,
  };
}

/* Controls flow of the game and state of game board */
function GameController(player1 = `player 1`, player2 = `player 2`) {
  const board = GameBoard();

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
    const result = ["win", "tie"];

    if (!gameBoard[index] === 0) return;
    gameBoard.addToken(index, currentPlayer.token);

    /* win conditions */
    if (checkForWinner() === true) {
      return result[0];
      /* if gameboard is full and theres no winner tie game */
    } else if (!gameBoard.getGameBoard().includes(0)) {
      return result[1];
    } else {
      switchCurrentPlayer();

      return;
    }
  };

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    console.log(`${activePlayer.name}'s turn...`);
  };

  /* plays round */
  const playRound = (index) => {
    printNewRound();
    board.insertToken(index, activePlayer.token);
    board.printBoard();
    switchPlayerTurn();
  };

  const gameEnd = () => {
    const gameBoard = board.getBoard();
  };

  /* get winner of round */
  const getWinner = () => {};

  return {
    getActivePlayer,
    switchPlayerTurn,
    playRound,
    printNewRound,
  };
}

function GameView() {
  const game = GameController();
  const gameDiv = document.querySelector(".game");

  game.playRound();
}

GameView();
