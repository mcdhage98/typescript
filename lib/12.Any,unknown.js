"use strict";
let exampleAny;
let exampleUnknown;
// any
exampleAny = 123;
exampleAny = "Hello";
// unknown can accept any values
exampleUnknown = 123;
exampleUnknown = "World";
exampleUnknown = {};
// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool = exampleAny;
// unknown
if (typeof exampleUnknown == "string") {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == "boolean") {
    let unknownSetBool = exampleUnknown;
}
