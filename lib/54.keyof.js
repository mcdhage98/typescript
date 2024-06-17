"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const john = {
    name: "John",
    age: 35,
    location: "Melbourne",
};
let k = "name";
function logGet(obj, key) {
    const value = obj[key];
    console.log("Getting:", key, value);
    return value;
}
const age = logGet(john, "age"); // 35
//console.log(logGet(john, 'email')); // Error
function logSet(obj, key, value) {
    console.log("Setting:", key, value);
    obj[key] = value;
}
logSet(john, "age", 8);
