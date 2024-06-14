"use strict";
let dice; // this is definitive type assertion
function rollDice() {
    dice = Math.floor(Math.random() * 6) + 1;
}
rollDice();
console.log("Current Dice Value", dice);
rollDice();
console.log("After another roll", dice);
///////////////////////////////
class Point {
    constructor() {
        this.moveRandom();
    }
    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}
