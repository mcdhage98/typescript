"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let point;
function initialize() {
    point = { x: 0, y: 0 };
}
initialize();
//console.log("After initialized", point.x, point.y); point.x will result in error as typescript wont do functional deep down analysis
// we know point.x cannot be null or undefined
console.log(point.x); //this a non null assertion operator
// to avoid non null assertions return type from initialise func
function initialize1() {
    return { x: 0, y: 0 };
}
const point1 = initialize1();
console.log("After initialized", point1.x, point1.y);
