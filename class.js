"use strict";

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  move(x, y, z) {
    this.x += x;
    this.y += y;
    this.z += z;
  }
  print() {
    console.log(`[${this.x} ${this.y} ${this.z}]`);
  }
}

const point = new Point(2, 2, 2);
point.move(3, 4, 5);
point.print();

console.log({ point });
console.log({ Point });
