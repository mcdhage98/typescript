"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class State {
    constructor(current) {
        this.current = current;
    }
    update(t) {
        this.current = { ...this.current, ...t };
    }
}
let s = new State({ x: 0, y: 0 });
s.update({ y: 10 });
