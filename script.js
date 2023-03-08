(function GameUI() {
  const game = GameController();
  const gameContainer = document.querySelector(".game");
  const boardSize = game.currentBoard().length;

  const renderBoard = () => {
    gameContainer.innerHTML = "";
    /* create game cells */
    for (let index = 0; index < boardSize; index++) {
      const cell = document.createElement("div");

      cell.classList.add("cell");

      cell.setAttribute("data-index", index);

      gameContainer.appendChild(cell);
    }

    gameContainer.addEventListener("click", clickEventHandler);
  };

  function clickEventHandler(e) {
    const cell = e.target;
    const player = game.getCurrentPlayer().name;
    const result = game.playRound(cell.getAttribute("data-index"));

    switch (result) {
      case "win":
        gameContainer.removeEventListener("click", clickEventHandler);
        break;

      case "tie":
        gameContainer.removeEventListener("click", clickEventHandler);
        break;

      default:
        break;
    }

    switch (player) {
      case "player1":
        if (cell.textContent !== "") return;
        cell.classList.add("player1");
        cell.textContent = "X";
        break;
      case "player2":
        if (cell.textContent !== "") return;
        cell.classList.add("player2");
        cell.textContent = "O";
      default:
        break;

        renderBoard();
    }
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
    const result = ["win", "tie"];

    if (!gameBoard[index] === 0) return;
    gameBoard.addToken(index, currentPlayer.token);

    if (checkForWinner() === true) {
      return result[0];
    } else if (!gameBoard.getGameBoard().includes(0)) {
      return result[1];
    } else {
      switchCurrentPlayer();

      return;
    }
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
      /* get the value of the indexes of the current gameBoard */
      /* at the indexes of winconditions */
      /* if the indexes are equal theres a winner */
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
