"use strict";

function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.toString = function () {
  return JSON.stringify(this);
};

function Square(x, y, side) {
  Rect.call(this, x, y, side, side);
}

Square.prototype = new Rect();
Square.prototype.constructor = Square;

// #2 Object.create
// Square.prototype = Object.create(Rect.prototype);
// Square.prototype.constructor = Square;

// #3 Manual __proto__ assignment
// Square.prototype.__proto__ = Rect.prototype;

// #4 With Object.setPrototypeOf
// Object.setPrototypeOf(Square.prototype, Rect.prototype);

// #5 Node.js 
// const util = require('util');
// util.inherits(Square, Rect);




Square.prototype.move = function (x,y){
    this.y += y;
    this.x += x;
}

const square = new Square(10, 20, 30);
square.move(1, 2);

console.log({ square });
console.log({ Square });
console.log({ Rect });
