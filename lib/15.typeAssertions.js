"use strict";
let hello = load(); //dummy function
const trimmed = hello.trim();
//use below if type is unknown
if (typeof hello === " string") {
    let trimmed = hello.trim();
}
