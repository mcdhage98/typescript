let dice!: number; // this is definitive asignment assertion
function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
}
rollDice();
console.log("Current Dice Value", dice);
rollDice();
console.log("After another roll", dice);

///////////////////////////////
class Point {
  x!: number; // this is definitive asignment assertion
  y!: number; // this is definitive asignment assertion
  constructor() {
    this.moveRandom();
  }
  moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
}

export {};
