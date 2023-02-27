function GameBoard() {
  const board = [];
  const boardArea = 9;
  for (let i = 0; i < boardArea; i++) {
    board.push(Cell().getValue());
  }

  const getBoard = () => board;

  /* replace value of element for the specified index */
  const insertToken = (index, player) => {
    if (index > board.length - 1) return;
    if (index === undefined) return;
    board.splice(index, 1, player);
  };

  return {
    getBoard,
    insertToken,
  };
}

/* value to fill board */
function Cell() {
  let value = 0;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => {
    return value;
  };

  return {
    addToken,
    getValue,
  };
}

/* Controls flow of the game and state of game board */
function GameController(player1 = "player 1", player2 = "player 2") {
  const board = GameBoard();

  const players = [
    {
      name: player1,
      token: 1,
    },
    {
      name: player2,
      token: 2,
    },
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    /* switches active player */
    activePlayer =
      activePlayer === players[0] ? (activePlayer = players[1]) : players[0];
  };

  const getActivePlayerToken = () => {
    return activePlayer.name;
  };

  /* plays round then switches player turn*/
  const playRound = (index) => {
    board.insertToken(index, activePlayer.token);
    console.log(activePlayer.name);
    console.log(board.getBoard());

    switchPlayerTurn();
  };

  const gameEnd = () => {
    const gameBoard = board.getBoard();
  };

  /* get winner of round */
  const getWinner = () => {};

  return {
    getActivePlayerToken,
    switchPlayerTurn,
    playRound,
    getBoard: board.getBoard,
  };
}

function GameView() {
  const game = GameController();
  const gameContainer = document.querySelector(".game");

  const board = game.getBoard();

  /* clears game board to render new board */
  const clearBoard = () => {
    gameContainer.innerHTML = "";
  };

  const updateScreen = () => {
    clearBoard();

    /* create cell for each element */
    board.forEach((element) => {
      const cellButton = document.createElement("div");

      cellButton.classList.add("cell");

      cellButton.textContent = element;

      gameContainer.appendChild(cellButton);
    });
  };

  updateScreen();
}

GameView();
