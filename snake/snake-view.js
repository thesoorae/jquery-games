const Board = require('./board');

const keyTranslation = { 37: "W", 38: "N", 39: "E", 40: "S" };

class View {
  constructor(el) {
    this.$el = el;
    this.board = new Board();
    $( "html" ).on( "keydown", function( event ) {
      this.board.snake.direction = keyTranslation[event.which];
    });

    window.setInterval(this.step(), 60);
  }
}

View.prototype.step = function() {
  this.render();
  this.board.snake.move();
};

View.prototype.render = function() {
  for (var i = 0; i < 30; i++) {
    let $ul = document.createElement("ul");
    $ul.id = i;
    for (var j = 0; j < 30; j++) {
      let $li = document.createElement("li");
      $li.id = j;
      $ul.append($li);
    }
    $('snake').append($ul);
  }
  this.board.snake.segments.forEach(pos) {
    $(`li#${pos[0]}, li#${pos[1]}`).addClass("snakeSegment");
  }
};

let view = new View;
