"use strict";

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class Square extends Rect {
  constructor(x, y, side) {
    super(x, y, side, side);
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }
}

const square = new Square(20, 30, 10);
square.move(4, 5);

console.log({ square });
console.log({ Square });
console.log({ Rect });
