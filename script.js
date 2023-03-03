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

    console.log(currentPlayer);
  };

  /* current player var is mutable */
  const getCurrentPlayer = () => currentPlayer;

  return {
    switchCurrentPlayer,
    getCurrentPlayer,
  };
}

window.addEventListener("click", () => {
  const game = Players();
  console.log(game.getCurrentPlayer().name);
});
