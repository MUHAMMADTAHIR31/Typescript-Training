"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
let myShape = new Shape_1.Shape(1, 2);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(1, 2, 3);
console.log(myCircle.getInfo());
