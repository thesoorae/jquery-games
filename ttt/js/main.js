const View = require('./ttt-view');
const Game = require('./game');

$( () => {
  let game = new Game();
  let el = $('figure.ttt');
  let view = new View(game, el);
  view.setupBoard();
  view.bindEvents();
});
