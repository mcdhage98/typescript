"use strict";
//type Add = (a:number, b:number) => number
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => {
    return a + b;
};
add.debugName = "Addition Function";
const Point = class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};
