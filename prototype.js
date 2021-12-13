"use strict";

function Point(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Point.prototype.move = function (x, y, z) {
  this.x += x;
  this.y += y;
  this.z += z;
};

Point.prototype.print = function () {
  console.log(`[${this.x}, ${this.y} ${this.z}]`);
};

Point.printHello = function () {
  console.log("Hello"); // не заработает
};

const point = new Point(10, 20, 30);

point.move(2, 3, 5);
point.print();
point.move(2, 2, 6);
point.print();
