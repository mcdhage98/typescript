"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const str = 'key';
const num = 1337;
const sym = Symbol();
const valid = {
    [str]: 'valid',
    [num]: 'valid',
    [sym]: 'valid',
};
const obj = {};
const invalid = {
//[obj]: 'invalid', error
};
//type PropertyKey = string | number | symbol
let example;
example = str;
example = num;
example = sym;
