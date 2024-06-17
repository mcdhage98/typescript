"use strict";
function size(input) {
    return typeof input == "number" ? input + "px" : input;
}
size(123);
size("123px");
size("12em");
