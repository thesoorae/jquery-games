
const RESIZER = {
  1: "small",
  2: "med",
  3: "big"
};


class HanoiView {
  constructor(game, domEl) {
    this.game = game;
    this.domEl = domEl;
    this.takePile = null;
    this.setupTowers();
    this.clickTower();
  }

  setupTowers() {
    this.render();
  }

  render(){

    let towers = this.game.towers;
    console.log(towers);

    for (var i = 0; i < 3; i++) {
      let $pile = $(`ul#${i}`);
      $pile.empty();
      let num = 3 - towers[i].length;
      for (var x = 0; x < num; x++) {
        let $emptyLi = document.createElement(`li`);
        $pile.append($emptyLi);
      }
      for (var j = towers[i].length-1; j >= 0 ; j--) {
        let size = RESIZER[towers[i][j]];
        let img = $('<img />', {
          src: 'log.png',
          class: size
        });
        let $li = document.createElement(`li`);
        img.appendTo($li);
        $pile.append($li);
      }

    }
  }

  clickTower(){
    $('ul').on("click", (ul) => {
      let tower = ul.delegateTarget.id;
      if (this.takePile === null) {
        $(`ul#${tower}`).toggleClass("clicked");

        this.takePile = tower;
      } else {
        this.game.move(this.takePile, tower);
        this.takePile = null;
        this.render();
        $(`ul`).removeClass("clicked");
      }
    });
    }
  }

module.exports = HanoiView;
