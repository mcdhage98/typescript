"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
function log(s) {
    console.log(s);
}
function sum(...nums) {
    return nums.reduce((acc, cur) => acc + cur);
}
let add1;
//type subtract = (a: number, b:number): number; //not a vlaid syntax
let add2;
const subtract = (a, b) => a - b;
