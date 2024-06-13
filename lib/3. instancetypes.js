"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let reg = new RegExp("ab+c");
let arr = [1, 2, 3];
let set = new Set([1, 2, 3]);
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let q = new Queue();
