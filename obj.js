"use strict";

const point = {
  x: 4,
  y: 5,
  z: 6,
};

const pointMethods = {
  move(x, y, z) {
    this.x += x;
    this.y += y;
    this.z += z;
  },
  start() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  },
  print() {
    return `[${this.x}, ${this.y}, ${this.z}]`;
  },
};
Object.setPrototypeOf(point, pointMethods);

point.move(1, 1, 1);
console.log(point.print());
point.start();
console.log(point.print());
point.move(6, 6, 7);
console.log(point.print());

console.log({ point });
console.log({ pointMethods });
