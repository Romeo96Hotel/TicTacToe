function GameBoard() {
  const board = [];
  const boardArea = 9;
  for (let i = 0; i < boardArea; i++) {
    board.push(Cell());
  }

  const getBoard = () => board;

  const insertToken = (index, player) => {
    /* checks if square has a token */
    const availableSq = board[index].getValue === 0;

    if (!availableSq) return;

    board[index].addToken(player);
  };

  /* prints board array to console */
  const printBoard = () => board.map((cell) => console.log(cell.getValue()));

  return {
    getBoard,
    insertToken,
    printBoard,
  };
}

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
    activePlayer =
      activePlayer === players[0] ? (activePlayer = players[1]) : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
  };
  return {
    switchPlayerTurn,
    getActivePlayer,
    printNewRound,
  };
}

function GameView() {}


