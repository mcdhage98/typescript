"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fail = (message) => {
    throw new Error(message);
};
const sing = function () {
    while (true) {
        console.log("Never gonna give you up");
        console.log("Never gonna let you down");
        console.log("Never gonna run around and desert you");
        console.log("Never gonna make you cry");
        console.log("Never gonna say goodbye");
        console.log("Never gonna tell a lie and hurt you");
    }
};
function area(s) {
    if (s.kind === "square") {
        return s.size * s.size;
    }
    else if (s.kind === "rectangle") {
        return s.width * s.height;
    }
    else if (s.kind === "circle") {
        return Math.PI * s.radius ** 2;
    }
    const _ensureAllCasesAreHandled = s;
}
