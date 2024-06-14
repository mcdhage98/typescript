"use strict";
//type Add = (a:number, b:number) => number
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
