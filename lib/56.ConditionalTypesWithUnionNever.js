"use strict";
function error(message) {
    throw new Error(message);
}
//const notAllowed: never = 'some string';
const allowed = error("this is okay");
const example = error("I will not return");
let ex = "";
