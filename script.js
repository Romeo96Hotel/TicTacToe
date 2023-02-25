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

/* value to fill board */
function Cell() {
  let value = 0;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue,
  };
}

/* Controls flow of the game and state of game board */
function GameController(player1 = `player 1`, player2 = `player 2`) {
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
