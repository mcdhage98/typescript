"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point = {
    x: 1,
    y: 1,
};
// point.x = 0 error as x is readonly
class Animal {
    constructor(name) {
        this.name = name;
    }
}
const sheep = new Animal("sheep");
console.log(sheep.name); // Allow
