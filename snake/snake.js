const DIRECTIONS = {
  N: [0,1], E:[1,0], S:[0,-1], W:[-1,0]};

  class Snake{
  constructor(){
    this.direction = "N";
    this.segments = [];
  }



  move(){
    this.segments.pop();
    let nextSegmentX = this.segments[0][0] + DIRECTIONS[this.direction][0];
    let nextSegmentY = this.segments[0][1] + DIRECTIONS[this.direction][1];
    this.segments.unshift([nextSegmentX, nextSegmentY]);
  }
}

class Coord{
  constructor(){

  }

  plus(){

  }
  equals(){

  }
  isOpposite(){

  }
}

class Board {
  constructor() {
    this.snake = new Snake();
  }
}

module.exports = Board;
