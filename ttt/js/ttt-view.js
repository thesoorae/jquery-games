class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {
    $("li").on("click", (li) => {
      let liId = li.target.id;
      let row = Math.floor(liId / 3);
      let column = liId % 3;
      let pos = [row, column];
      if(this.game.board.isEmptyPos(pos)){
      this.game.playMove(pos);
      this.makeMove($(li.target));
      } else {
      alert("Invalid Move");
      }
    });
  }

  makeMove($square) {
    $square.addClass( "clicked" );
    $square.text(this.game.currentPlayer);
    if(this.game.isOver()){
      let real_winner = this.game.winner() === "x" ? "o" : "x";
      $('li').addClass("not_winner");
      let $winners = $(`li:contains(${real_winner})`);
      $winners.addClass("winner");
      $winners.removeClass("not_winner");
      alert(`${real_winner} won!`);
      $("li").off();
    }
  }

  setupBoard() {
    const ul = document.createElement("ul");
    this.$el.append(ul);
    const $ul = $("ul");
    for (let i = 0; i < 9; i++) {
      const li = document.createElement("li");
      li.id = i;
      $ul.append(li);
    }
  }
}

module.exports = View;
