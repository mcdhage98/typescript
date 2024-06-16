"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let suffix;
let count = 0;
const getSuffix = () => {
    if (count % 2 == 0) {
        return "p";
    }
    else
        return null;
};
suffix = getSuffix();
if (suffix != null) {
    let exampleOne = "jane" + suffix.toUpperCase();
    ["jane", "john"].forEach((name) => {
        //let exampleTwo: string = name + suffix.toUpperCase();
        /* the above line suffix.toUpperCase() gets typescript error becoz tsc feels it might be string or a null
        reason is its a callback
        */
    });
}
// solution
if (suffix != null) {
    let suffixLocal = suffix; //use this to fix above issue
    let exampleOne = "jane" + suffixLocal.toUpperCase();
    ["jane", "john"].forEach((name) => {
        let exampleTwo = name + suffixLocal.toUpperCase();
    });
}
////////////////////////////////////////////
let example = getSuffix();
if (example != null)
    setTimeout(() => {
        //console. log (example.toUpperCase());//let exampleTwo: string = name + suffix.toUpperCase();
        /* the above line example.toUpperCase() gets typescript error becoz tsc feels it might be string or a null
        reason is its a callback
        */
    });
example = null;
